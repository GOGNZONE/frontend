import React, { useEffect, useState } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import { getProductionList } from '../../../../../../Apis/productionApi';

const ProductionListContainer = () => {
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    getProductionListApi();
  }, []);

  const getProductionListApi = () => {
    getProductionList().then((response) => {
      setProductions(response.data);
    });
  };

  return <ProductionListPresenter dataSource={productions} />;
};

export default ProductionListContainer;
