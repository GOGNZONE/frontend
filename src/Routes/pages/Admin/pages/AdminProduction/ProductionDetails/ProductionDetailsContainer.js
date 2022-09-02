import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductionDetailsPresenter from './ProductionDetailsPresenter';
import ProductionUpdatePresenter from './ProductionUpdatePresenter';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProduction,
  putProduction,
  clearProduction,
  deleteProduction,
} from 'store/modules/production/productionActions';
import { message } from 'antd';

const ProductionDetailsContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading } = useSelector((state) => state.production.production);
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [productionValue, setProductionValue] = useState({});
  const [visible, setVisible] = useState(false);
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduction(productionIdParams));
    return () => {
      dispatch(clearProduction());
    };
  }, [productionIdParams, dispatch, switchToEditPage]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClickHandler = useCallback(async () => {
    if (
      productionValue.productionName === '' ||
      productionValue.productionPrice === null ||
      productionValue.productionQuantity === null ||
      productionValue.productionReleasedDate === 'Invalid date'
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(
        putProduction({
          productionId: productionIdParams,
          inData: productionValue,
        }),
      );
      await setSwitchToEditPage(true);
    }
  }, [dispatch, productionIdParams, productionValue]);

  const onChangeHandler = (value) => {
    setProductionValue(value);
  };

  const onSetProductionValue = (data) => {
    setProductionValue(data);
  };

  const onDeleteProduction = async (productionId) => {
    await dispatch(deleteProduction(productionId));
    await navigate('/admin/production/list');
  };

  return switchToEditPage ? (
    <ProductionDetailsPresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onSetProductionValue={onSetProductionValue}
      showDrawer={showDrawer}
      onClose={onClose}
      visible={visible}
      onDeleteProduction={onDeleteProduction}
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
