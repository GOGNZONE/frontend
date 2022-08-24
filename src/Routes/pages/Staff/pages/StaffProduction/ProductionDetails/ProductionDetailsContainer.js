import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearProduction,
  getProduction,
  putProduction,
} from 'store/modules/production/productionActions';

const ProductionDetailsContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** state *****/
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const [productionValue, setProductionValue] = useState({});
  /***** redux *****/
  const { data, loading, error } = useSelector(
    (state) => state.production.production,
  );

  // const { data, loading, error } = useSelector((state) =>
  //   state.production.production ? state.production.production : null,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduction(productionIdParams));
    // return () => {
    //   dispatch(clearProduction());
    // };
  }, [productionIdParams, dispatch]);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onButtonNameChange = () => {
    setUpdateButton(!updateButton);
  };

  const onChangeHandler = (value) => {
    setProductionValue(value);
  };

  const onClickHandler = () => {
    if (updateButton) {
      setProductionValue(data);
    } else {
      dispatch(
        putProduction({
          productionId: productionIdParams,
          inData: productionValue,
        }),
      );
    }
  };

  return (
    <ProductionDetailsPresenter
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      data={data}
      productionIdParams={productionIdParams}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
      loading={loading}
      onClickHandler={onClickHandler}
      productionValue={productionValue}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default ProductionDetailsContainer;
