import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getProductions } from 'store/modules/production/productionActions';
import ReleaseRegistrationPresenter from './ReleaseRegistrationPresenter';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { postRelease } from 'store/modules/release/releaseActions';
import { useNavigate } from 'react-router-dom';

const ReleaseRegistrationContainer = () => {
  /***** state *****/
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [releaseValue, setReleaseValue] = useState({
    releaseDate: '',
    releaseDescription: '',
    releaseQuantity: 1,
    releaseTotalPrice: 0,
    releaseType: '배송',
    releaseConfirmed: 0,
    production: { productionId: '' },
    delivery: { deliveryCompanyName: '', deliveryTrackingNumber: '' },
  });
  const { data, loading } = useSelector(
    (state) => state.production.productions,
  );
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductions());
  }, [dispatch]);

  const onChangeHandler = (value) => {
    setReleaseValue(value);
  };

  const onClickHandler = useCallback(async () => {
    if (
      releaseValue.releaseId === '' ||
      releaseValue.releaseDate === '' ||
      releaseValue.releaseQuantity === '' ||
      releaseValue.releaseTotalPrice === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      releaseValue.releaseTotalPrice =
        releaseValue.releaseQuantity * data[index].productionPrice;
      releaseValue.production.productionId = data[index].productionId;
      await dispatch(
        // releaseValue.production.productionId = data[index].productionId;
        postRelease({
          productionId: releaseValue.production.productionId,
          releaseData: releaseValue,
          deliveryData: releaseValue.delivery,
        }),
      );
      await navigate('/admin/release/list');
    }
  });

  return (
    <ReleaseRegistrationPresenter
      releaseValue={releaseValue}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      productionData={data}
      loading={loading}
      setIndex={setIndex}
      index={index}
    />
  );
};

export default ReleaseRegistrationContainer;
