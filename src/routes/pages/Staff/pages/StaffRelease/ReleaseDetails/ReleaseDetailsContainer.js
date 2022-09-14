import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { clearRelease, getRelease } from 'store/modules/release/releaseActions';

const ReleaseDetailsContainer = () => {
  /***** release id params *****/
  const { releaseIdParams } = useParams();
  /***** redux(state) *****/
  const { data, loading } = useSelector((state) => state.release.release);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelease(releaseIdParams));
    return () => {
      dispatch(clearRelease());
    };
  }, [releaseIdParams, dispatch]);

  return <ReleaseDetailsPresenter data={data} loading={loading} />;
};

export default ReleaseDetailsContainer;
