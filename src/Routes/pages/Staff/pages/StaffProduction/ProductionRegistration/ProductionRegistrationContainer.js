import React, { useState, useCallback, useEffect } from 'react';
import ProductionRegistrationPresenter from 'Routes/pages/Staff/pages/StaffProduction/ProductionRegistration/ProductionRegistrationPresenter';
import { useDispatch } from 'react-redux';
import { postProduction } from 'store/modules/production/productionActions';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const ProductionRegistrationContainer = () => {
  /***** state *****/
  const [productionValue, setProductionValue] = useState({
    productionName: '',
    productionBrandName: '',
    productionPrice: '',
    productionQuantity: '',
    productionStandard: '',
    productionUnit: '',
    productionDescription: '',
    productionReleasedDate: '',
    productionDate: '',
    productionFile: '',
  });
  const dispatch = useDispatch();
  /***** navigate *****/
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getClients());
  // }, [dispatch]);

  const onChangeHandler = (value) => {
    setProductionValue(value);
  };

  const onClickHandler = useCallback(() => {
    if (
      productionValue.productionName === '' ||
      productionValue.productionPrice === '' ||
      productionValue.productionQuantity === '' ||
      productionValue.productionReleasedDate === '' ||
      productionValue.productionDate === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      console.log(dispatch(postProduction(productionValue)));
      navigate('list');
    }
  });

  return (
    <ProductionRegistrationPresenter
      productionValue={productionValue}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
    />
  );
};

export default ProductionRegistrationContainer;
