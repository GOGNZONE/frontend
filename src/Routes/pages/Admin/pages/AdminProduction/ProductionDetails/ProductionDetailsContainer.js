import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';
import ProductionUpdatePresenter from './ProductionUpdatePresenter';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProduction,
  putProduction,
} from 'store/modules/production/productionActions';

const ProductionDetailsContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading, error } = useSelector(
    (state) => state.production.production,
  );
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [productionValue, setProductionValue] = useState({});

  useEffect(() => {
    dispatch(getProduction(productionIdParams));
  }, [productionIdParams, dispatch]);

  const onClickHandler = () => {
    dispatch(
      putProduction({
        productionId: productionIdParams,
        inData: productionValue,
      }),
    );
  };

  const onChangeHandler = (value) => {
    setProductionValue(value);
  };

  return switchToEditPage ? (
    <ProductionDetailsPresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
    />
  ) : (
    <ProductionUpdatePresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onClickHandler={onClickHandler}
      productionValue={productionValue}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default ProductionDetailsContainer;
