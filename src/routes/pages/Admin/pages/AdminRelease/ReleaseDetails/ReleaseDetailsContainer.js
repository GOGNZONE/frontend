import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { clearRelease, getRelease } from 'store/modules/release/releaseActions';
import ReleaseUpdatePresenter from './ReleaseUpdatePresenter';
import { message } from 'antd';
import {
  putRelease,
  deleteRelease,
} from 'store/modules/release/releaseActions';
import { deleteProduction } from 'store/modules/production/productionActions';

const ReleaseDetailsContainer = () => {
  /***** release id params *****/
  const { releaseIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading } = useSelector((state) => state.release.release);
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [releaseValue, setReleaseValue] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRelease(releaseIdParams));
    return () => {
      dispatch(clearRelease());
    };
  }, [releaseIdParams, dispatch, switchToEditPage]);

  const onClickHandler = useCallback(async () => {
    if (
      releaseValue.releaseTotalPrice === null ||
      releaseValue.releaseQuantity === null ||
      releaseValue.releaseDate === 'Invalid date'
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      releaseValue.releaseTotalPrice =
        releaseValue.releaseQuantity * data.production.productionPrice;
      await dispatch(
        putRelease({
          releaseId: releaseIdParams,
          releaseData: releaseValue,
          deliveryData: releaseValue.delivery,
        }),
      );
      await setSwitchToEditPage(true);
    }
  }, [dispatch, switchToEditPage, releaseValue]);

  const onChangeHandler = (value) => {
    setReleaseValue(value);
  };

  const onSetReleaseValue = (data) => {
    setReleaseValue(data);
  };

  const onDeleteRelease = async (releaseId, productionId) => {
    await dispatch(deleteRelease(releaseId));
    await dispatch(deleteProduction(productionId));
    await navigate('/admin/release/list');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (
      releaseValue.delivery.deliveryCompanyName === '' ||
      releaseValue.delivery.deliveryTrackingNumber === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSetReleaseConfirmed = async () => {
    releaseValue.releaseConfirmed = 1;
    await dispatch(
      putRelease({
        releaseId: releaseIdParams,
        releaseData: releaseValue,
        deliveryData: releaseValue.delivery,
      }),
    );
    await dispatch(getRelease(releaseIdParams));
  };

  return switchToEditPage ? (
    <ReleaseDetailsPresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onSetReleaseValue={onSetReleaseValue}
      onDeleteRelease={onDeleteRelease}
      isButtonVisible={isButtonVisible}
      setIsButtonVisible={setIsButtonVisible}
      onSetReleaseConfirmed={onSetReleaseConfirmed}
    />
  ) : (
    <ReleaseUpdatePresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onClickHandler={onClickHandler}
      releaseValue={releaseValue}
      onChangeHandler={onChangeHandler}
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
};

export default ReleaseDetailsContainer;
