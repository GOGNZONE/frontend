import React, { useEffect, useRef, useState } from 'react';
import { getReleases } from 'store/modules/release/releaseActions';
import { deleteProduction } from 'store/modules/production/productionActions';
import ReleaseListPresenter from './ReleaseListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRelease } from 'store/modules/release/releaseActions';

const ReleaseListContainer = () => {
  /***** redux (state) *****/
  const { data, loading } = useSelector((state) => state.release.releases);
  const dispatch = useDispatch();
  /***** search *****/
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getReleases());
    };
    !loading && callDispatch();
  }, []);

  const onDeleteRelease = (releaseId, productionId) => {
    dispatch(deleteRelease(releaseId));
    dispatch(deleteProduction(productionId));
  };

  return (
    <ReleaseListPresenter
      dataSource={data}
      loading={loading}
      onDeleteRelease={onDeleteRelease}
      searchInput={searchInput}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default ReleaseListContainer;
