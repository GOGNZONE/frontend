import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getProductionList,
  postProduction,
} from '../../../../../../Apis/productionApi';
import ProductionRegistrationPresenter from './ProductionRegistrationPresenter';
import moment from 'moment';

const ProductionRegistrationContainer = () => {
  const [productionLen, setProductionLen] = useState(0);
  const [newProduction, setNewProduction] = useState({
    productionName: '',
    productionBrandName: '',
    productionPrice: '',
    productionQuantity: '',
    productionStandard: '',
    productionUnit: '',
    productionDescription: '',
    productionReleasedDate: '',
    productionDate: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    getProductionListApi();
  }, []);

  const getProductionListApi = () => {
    getProductionList().then((response) => {
      setProductionLen(response.data.length);
    });
  };

  const onChange = (e) => {
    let { value, name } = '';

    if (e.target === undefined) {
      if (moment.isMoment(e.value)) {
        console.log(e);
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

    setNewProduction({
      ...newProduction,
      [name]: value,
    });
  };

  const postProductionApi = (newProduction) => {
    postProduction(newProduction).then(() =>
      navigate('/staff/production/list'),
    );
  };

  return (
    <ProductionRegistrationPresenter
      productionLen={productionLen}
      onChange={onChange}
      postProductionApi={postProductionApi}
      newProduction={newProduction}
    />
  );
};

export default ProductionRegistrationContainer;
