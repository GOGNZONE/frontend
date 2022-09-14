import React, { useEffect, useRef, useState } from 'react';
import { getReleases } from 'store/modules/release/releaseActions';
import ReleaseListPresenter from './ReleaseListPresenter';
import { useSelector, useDispatch } from 'react-redux';

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

  return (
    <ReleaseListPresenter
      dataSource={data}
      loading={loading}
      searchInput={searchInput}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default ReleaseListContainer;
