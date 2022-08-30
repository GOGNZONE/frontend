import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { clearRelease, getRelease } from 'store/modules/release/releaseActions';
import ReleaseUpdatePresenter from './ReleaseUpdatePresenter';
import { message } from 'antd';
import { putRelease } from 'store/modules/release/releaseActions';

const ReleaseDetailsContainer = () => {
  /***** release id params *****/
  const { releaseIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading, error } = useSelector(
    (state) => state.release.release,
  );
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);
  const [releaseValue, setReleaseValue] = useState({});

  useEffect(() => {
    dispatch(getRelease(releaseIdParams));
    return () => {
      dispatch(clearRelease());
    };
  }, [releaseIdParams, dispatch, switchToEditPage]);

  const onClickHandler = useCallback(async () => {
    if (
      releaseValue.productionName === '' ||
      releaseValue.productionPrice === null ||
      releaseValue.productionQuantity === null ||
      releaseValue.productionReleasedDate === 'Invalid date'
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(
        putRelease({
          releaseId: releaseIdParams,
          inData: releaseValue,
        }),
      );
      await setSwitchToEditPage(true);
    }
  });

  const onChangeHandler = (value) => {
    setReleaseValue(value);
  };

  const onSetReleaseValue = (data) => {
    setReleaseValue(data);
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
    />
  );
};

export default ReleaseDetailsContainer;
