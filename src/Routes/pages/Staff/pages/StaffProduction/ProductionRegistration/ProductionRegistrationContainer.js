import React, { useCallback } from 'react';
import ProductionRegistrationPresenter from './ProductionRegistrationPresenter';
import { useSelector, useDispatch } from 'react-redux';
import * as api from 'Apis/index';
import { useNavigate } from 'react-router-dom';
import { addProduction } from 'store/modules/production/productionAction';

const ProductionRegistrationContainer = () => {
  /***** redux (state) *****/
  const dispatch = useDispatch();
  const production = useSelector((state) => state.production);
  /***** navigate *****/
  const navigate = useNavigate();

  console.log(production);

  const onChange = useCallback((value) => {
    dispatch(addProduction(value));
  });

  const postProductionAPI = async (production) => {
    try {
      const response = await api.registerProduction(production);
      if (response) {
        navigate('list');
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <ProductionRegistrationPresenter
      onChange={onChange}
      production={production}
      postProductionAPI={postProductionAPI}
    />
  );
};

export default ProductionRegistrationContainer;
