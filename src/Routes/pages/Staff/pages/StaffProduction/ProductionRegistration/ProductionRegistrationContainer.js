import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getProductionList,
  postProduction,
} from '../../../../../../Apis/productionApi';
import ProductionRegistrationPresenter from './ProductionRegistrationPresenter';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { setNewProduction } from '../../../../../../modules/production';

const ProductionRegistrationContainer = () => {
  const [productionLen, setProductionLen] = useState(0);
  const navigate = useNavigate();

  const newProduction = useSelector((state) => state.production);
  const dispatch = useDispatch();

  const {
    productionName,
    productionBrandName,
    productionPrice,
    productionQuantity,
    productionStandard,
    productionUnit,
    productionDescription,
    productionReleasedDate,
    productionDate,
  } = newProduction;

  useEffect(() => {
    getProductionListAPI();
  }, []);

  const getProductionListAPI = () => {
    // getProductionList().then((response) => {
    //   setProductionLen(response.data.length);
    // });
  };

  const onChange = useCallback((e) => {
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

    dispatch(setNewProduction({ name: name, value: value }));
  });

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
