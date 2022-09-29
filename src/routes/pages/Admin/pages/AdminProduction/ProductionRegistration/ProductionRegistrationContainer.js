import React, { useState, useCallback, useEffect } from 'react';
import ProductionRegistrationPresenter from './ProductionRegistrationPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { postProduction } from 'store/modules/production/productionActions';
import { useNavigate } from 'react-router-dom';
import { getClientList } from 'store/modules/client/clientActions';
import { message } from 'antd';

const ProductionRegistrationContainer = () => {
  /***** state *****/
  const [productionValue, setProductionValue] = useState({
    productionName: null,
    productionPrice: 0,
    productionQuantity: 1,
    productionStartDate: null,
    productionReleasedDate: null,
    productionProgress: 0,
    client: { clientId: null },
  });
  /***** redux *****/
  const { data, loading } = useSelector((state) => state.client.clientList);
  const dispatch = useDispatch();
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  const onChangeHandler = (value) => {
    setProductionValue(value);
  };

  const onClickHandler = useCallback(async () => {
    if (productionValue) {
      await dispatch(postProduction(productionValue));
      await navigate('list');
    } else {
      message.error('필수 입력값을 입력해 주세요.');
    }
  });

  return (
    <ProductionRegistrationPresenter
      productionValue={productionValue}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      clientData={data}
      loading={loading}
    />
  );
};

export default ProductionRegistrationContainer;
