import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import {
//   getProduction,
//   putProduction,
// } from '../../../../../../apis/productionApi';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';
import moment from 'moment';

const ProductionDetailsContainer = () => {
  const { productionIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [production, setProduction] = useState([]);
  const [updateButton, setUpdateButton] = useState(true);

  // useEffect(() => {
  //   getProductionApi(productionIdParams);
  // }, [productionIdParams]);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onButtonNameChange = () => {
    setUpdateButton(!updateButton);
  };

  // const getProductionApi = (productionIdParams) => {
  //   getProduction(productionIdParams).then((response) => {
  //     setProduction(response.data);
  //   });
  // };

  // const putProductionApi = (productionIdParams, production) => {
  //   putProduction(productionIdParams, production);
  // };

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

    setProduction({
      ...production,
      [name]: value,
    });
  };

  console.log(production);

  return (
    <ProductionDetailsPresenter
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      production={production}
      productionIdParams={productionIdParams}
      // putProductionApi={putProductionApi}
      onChange={onChange}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
    />
  );
};

export default ProductionDetailsContainer;
