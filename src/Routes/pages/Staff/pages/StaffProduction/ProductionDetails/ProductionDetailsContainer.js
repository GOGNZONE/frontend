import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { putProduction } from 'Apis/productionApi';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import * as api from 'Apis/index';
import { getProduction } from 'store/modules/production/productionAction';

const ProductionDetailsContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** state and redux *****/
  const [componentDisabled, setComponentDisabled] = useState(true);
  const production = useSelector((state) => state.production);
  const [updateButton, setUpdateButton] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductionAPI(productionIdParams);
  }, [productionIdParams]);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onButtonNameChange = () => {
    setUpdateButton(!updateButton);
  };

  const getProductionAPI = async (productionIdParams) => {
    try {
      const response = await api.getProductionInfo(productionIdParams);
      if (response) {
        dispatch(getProduction(response.data));
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const putProductionApi = (productionIdParams, production) => {
    putProduction(productionIdParams, production);
  };

  const onChange = (e) => {
    let { value, name } = '';

    if (e.target === undefined) {
      if (moment.isMoment(e.value)) {
        value = e.value.format('YYYY-MM-DD');
        name = e.name;
      } else {
        value = parseInt(e.value);
        name = e.name;
      }
    } else {
      value = e.target.value;
      name = e.target.name;
    }

    // setProduction({
    //   ...production,
    //   [name]: value,
    // });
  };

  return (
    <ProductionDetailsPresenter
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      production={production}
      productionIdParams={productionIdParams}
      putProductionApi={putProductionApi}
      onChange={onChange}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
    />
  );
};

export default ProductionDetailsContainer;
