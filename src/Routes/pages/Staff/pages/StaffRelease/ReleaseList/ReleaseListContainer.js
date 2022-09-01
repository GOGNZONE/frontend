import React, { useEffect } from 'react';
import { getReleases } from 'store/modules/release/releaseActions';
import ReleaseListPresenter from './ReleaseListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRelease } from 'store/modules/release/releaseActions';

const ReleaseListContainer = () => {
  /***** redux (state) *****/
  const releases = useSelector((state) => state.release.releases);
  const { data, loading } = releases;
  const dispatch = useDispatch();

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getReleases());
    };
    !loading && callDispatch();
  }, []);

  const onDeleteRelease = (releaseId) => {
    dispatch(deleteRelease(releaseId));
  };

  return (
    <ReleaseListPresenter
      dataSource={data}
      loading={loading}
      onDeleteRelease={onDeleteRelease}
    />
  );
};

export default ReleaseListContainer;
