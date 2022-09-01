import React, { useState, useCallback, useEffect } from 'react';
import ProductionRegistrationPresenter from './ProductionRegistrationPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { postProduction } from 'store/modules/production/productionActions';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { getClientList } from 'store/modules/client/clientActions';

const ProductionRegistrationContainer = () => {
  /***** state *****/
  const [productionValue, setProductionValue] = useState({
    productionName: '',
    productionBrandName: '',
    productionPrice: 0,
    productionQuantity: 1,
    productionStandard: '',
    productionUnit: '',
    productionDescription: '',
    productionDate: '',
    productionFile: '',
    client: { clientId: '' },
  });
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
    if (
      productionValue.productionName === '' ||
      productionValue.productionPrice === '' ||
      productionValue.productionQuantity === '' ||
      productionValue.productionDate === '' ||
      productionValue.client.clientId === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(postProduction(productionValue));
      await navigate('list');
    }
  }, [dispatch, navigate, productionValue]);

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
