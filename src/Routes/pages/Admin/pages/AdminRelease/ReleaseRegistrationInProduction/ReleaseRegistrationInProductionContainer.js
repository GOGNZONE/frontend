import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getProduction } from 'store/modules/production/productionActions';
import { postRelease } from 'store/modules/release/releaseActions';
import ReleaseRegistrationInProductionPresenter from './ReleaseRegistrationInProductionPresenter';

const ReleaseRegistrationInProductionContainer = () => {
  /***** production id params *****/
  const { productionIdParams } = useParams();
  /***** state *****/
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
  const { data, loading, error } = useSelector(
    (state) => state.production.production,
  );
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  /***** navigate *****/
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduction(productionIdParams));
  }, [productionIdParams, dispatch]);

  const onChangeHandler = (value) => {
    setReleaseValue(value);
  };

  const onClickHandler = useCallback(async () => {
    if (
      releaseValue.releaseDate === '' ||
      releaseValue.releaseQuantity === '' ||
      releaseValue.releaseTotalPrice === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(
        postRelease({
          productionId: productionIdParams,
          releaseData: releaseValue,
          deliveryData: releaseValue.deliveryDto,
        }),
      );
      await navigate('/admin/production/list');
    }
  });

  return (
    <ReleaseRegistrationInProductionPresenter
      releaseValue={releaseValue}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      productionData={data}
      loading={loading}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
};

export default ReleaseRegistrationInProductionContainer;
