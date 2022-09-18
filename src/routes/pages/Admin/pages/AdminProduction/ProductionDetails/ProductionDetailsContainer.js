import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
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
import { getClientList } from 'store/modules/client/clientActions';
import { getStorageList } from 'store/modules/storage/storageActions';

const ProductionDetailsContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** redux *****/
  const { data, loading } = useSelector((state) => state.production.production);
  const { data: clientData } = useSelector((state) => state.client.clientList);
  const { data: storageData } = useSelector(
    (state) => state.storage.storageList,
  );
  const dispatch = useDispatch();
  /***** state *****/
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [productionValue, setProductionValue] = useState({});
  const [visible, setVisible] = useState(false);
  const [selectVisible, setSelectVisible] = useState(true);
  const [checkProgress, setCheckProgress] = useState(0);
  const [fileVisible, setFileVisible] = useState(false);
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduction(productionIdParams));
    dispatch(getClientList());
    dispatch(getStorageList());
    return () => {
      dispatch(clearProduction());
    };
  }, [dispatch, productionIdParams, switchToEditPage]);

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
      productionValue.productionReleasedDate === 'Invalid date' ||
      productionValue.productionReleasedDate === '' ||
      productionValue.productionReleasedDate === null ||
      productionValue.productionStartDate === 'Invalid date' ||
      productionValue.productionStartDate === '' ||
      productionValue.productionStartDate === null
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

  const onClickUpdateProductionProgress = useCallback(async () => {
    if (productionValue.productionProgress === '2') {
      if (
        productionValue.productionEndDate === 'Invalid date' ||
        productionValue.productionEndDate === '' ||
        productionValue.productionEndDate === null ||
        productionValue.stock === null
      ) {
        message.error('완료 일자와 창고를 입력해 주세요.');
      } else {
        setSelectVisible(!selectVisible);
        await dispatch(
          putProduction({
            productionId: productionIdParams,
            inData: productionValue,
          }),
        );
        await navigate('/admin/production/list-completed');
      }
    } else {
      setSelectVisible(!selectVisible);
      await dispatch(
        putProduction({
          productionId: productionIdParams,
          inData: productionValue,
        }),
      );
      await setSelectVisible(!selectVisible);
      await window.location.replace(`/admin/production/${productionIdParams}`);
    }
  }, [dispatch, navigate, productionIdParams, productionValue, selectVisible]);

  const onChangeHandler = (value) => {
    setProductionValue(value);
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
      setProductionValue={setProductionValue}
      showDrawer={showDrawer}
      onClose={onClose}
      visible={visible}
      onDeleteProduction={onDeleteProduction}
      onChangeHandler={onChangeHandler}
      productionValue={productionValue}
      selectVisible={selectVisible}
      setSelectVisible={setSelectVisible}
      onClickUpdateProductionProgress={onClickUpdateProductionProgress}
      setCheckProgress={setCheckProgress}
      checkProgress={checkProgress}
      storageData={storageData}
    />
  ) : (
    <ProductionUpdatePresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onClickHandler={onClickHandler}
      productionValue={productionValue}
      onChangeHandler={onChangeHandler}
      clientData={clientData}
      fileVisible={fileVisible}
      setFileVisible={setFileVisible}
    />
  );
};

export default ProductionDetailsContainer;
