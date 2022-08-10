import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduction } from '../../../../../../Apis/api/productionApi';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';

const ProductionDetailsContainer = () => {
  const { productionIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [production, setProduction] = useState([]);

  useEffect(() => {
    getProductionApi(productionIdParams);
  }, [productionIdParams]);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const getProductionApi = (productionIdParams) => {
    getProduction(productionIdParams).then((response) => {
      setProduction(response.data);
    });
  };

  return (
    <ProductionDetailsPresenter
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      production={production}
    />
  );
};

export default ProductionDetailsContainer;
