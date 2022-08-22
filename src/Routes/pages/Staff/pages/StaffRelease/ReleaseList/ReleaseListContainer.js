import React, { useEffect, useState, useRef } from 'react';
import { getReleaseList } from '../../../../../../Apis/releaseApi';
import ReleaseListPresenter from './ReleaseListPresenter';

const ReleaseListContainer = () => {
  const [releases, setReleases] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    getReleaseListApi();
  }, []);

  const getReleaseListApi = () => {
    getReleaseList().then((response) => {
      setReleases(response.data);
    });
  };
  return (
    <ReleaseListPresenter
      dataSource={releases}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default ReleaseListContainer;