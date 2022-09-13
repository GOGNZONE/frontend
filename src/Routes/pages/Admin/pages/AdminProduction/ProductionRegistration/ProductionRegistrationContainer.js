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
  const { data, loading } = useSelector((state) => state.client.clientList);

  console.log(productionValue);

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
    if (
      productionValue.productionName === null ||
      productionValue.productionPrice === null ||
      productionValue.productionQuantity === null ||
      productionValue.productionStartDate === null ||
      productionValue.productionStartDate === 'Invalid date' ||
      productionValue.productionReleasedDate === null ||
      productionValue.productionReleasedDate === 'Invalid date' ||
      productionValue.client.clientId === null
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(postProduction(productionValue));
      await navigate('list');
    }
    // eslint-disable-next-line
  }, []);

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
