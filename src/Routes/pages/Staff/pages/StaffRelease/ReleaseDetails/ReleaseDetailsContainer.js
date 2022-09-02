import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { clearRelease, getRelease } from 'store/modules/release/releaseActions';
import { message } from 'antd';
import { putRelease } from 'store/modules/release/releaseActions';
import ReleaseUpdatePresenter from './ReleaseUpdatePresenter';

const ReleaseDetailsContainer = () => {
  /***** release id params *****/
  const { releaseIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading } = useSelector((state) => state.release.release);
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [releaseValue, setReleaseValue] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getRelease(releaseIdParams));
    return () => {
      dispatch(clearRelease());
    };
  }, [releaseIdParams, dispatch, switchToEditPage]);

  const onClickHandler = useCallback(async () => {
    console.log(releaseValue);
    if (
      releaseValue.releaseTotalPrice === null ||
      releaseValue.releaseQuantity === null ||
      releaseValue.releaseDate === 'Invalid date'
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(
        putRelease({
          releaseId: releaseIdParams,
          releaseData: releaseValue,
          deliveryData: releaseValue.deliveryDto,
        }),
      );
      await setSwitchToEditPage(true);
    }
  }, [dispatch, switchToEditPage, releaseValue]);

  const onSetReleaseValue = (data) => {
    setReleaseValue(data);
  };

  const onChangeHandler = (value) => {
    setReleaseValue(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (
      releaseValue.deliveryDto.deliveryCompanyName === '' ||
      releaseValue.deliveryDto.deliveryTrackingNumber === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return switchToEditPage ? (
    <ReleaseDetailsPresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
      onSetReleaseValue={onSetReleaseValue}
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
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
    />
  );
};

export default ReleaseDetailsContainer;
