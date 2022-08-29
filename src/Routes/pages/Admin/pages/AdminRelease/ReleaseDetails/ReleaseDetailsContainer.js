import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getRelease } from 'store/modules/release/releaseActions';
import ReleaseUpdatePresenter from './ReleaseUpdatePresenter';

const ReleaseDetailsContainer = () => {
  console.log('release details');
  /***** release id params *****/
  const { releaseIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading, error } = useSelector(
    (state) => state.release.release,
  );
  const dispatch = useDispatch();
  const [switchToEditPage, setSwitchToEditPage] = useState(true);

  useEffect(() => {
    dispatch(getRelease(releaseIdParams));
  }, [releaseIdParams, dispatch]);

  return switchToEditPage ? (
    <ReleaseDetailsPresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
    />
  ) : (
    <ReleaseUpdatePresenter
      data={data}
      loading={loading}
      setSwitchToEditPage={setSwitchToEditPage}
    />
  );
};

export default ReleaseDetailsContainer;
