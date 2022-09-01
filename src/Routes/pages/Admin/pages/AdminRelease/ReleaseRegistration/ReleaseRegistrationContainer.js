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
    releaseId: '',
    releaseDate: '',
    releaseDescription: '',
    releaseQuantity: 1,
    releaseTotalPrice: 0,
    releaseType: '배송',
    production: { productionId: '' },
    deliveryDto: { deliveryCompanyName: '', deliveryTrackingNumber: '' },
  });
  const { data, loading } = useSelector(
    (state) => state.production.productions,
  );
  const dispatch = useDispatch();
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
      releaseValue.production.productionId === '' ||
      releaseValue.releaseId === '' ||
      releaseValue.releaseDate === '' ||
      releaseValue.releaseQuantity === '' ||
      releaseValue.releaseTotalPrice === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(
        postRelease({
          productionId: releaseValue.production.productionId,
          releaseData: releaseValue,
          deliveryData: releaseValue.deliveryDto,
        }),
      );
      console.log(releaseValue);
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
    />
  );
};

export default ReleaseRegistrationContainer;
