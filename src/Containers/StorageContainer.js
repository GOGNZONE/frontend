import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getStor, getList } from '../modules/storage';

const { useEffect } = React;
const StorageContainer = ({
  getStor,
  getList,
  Stor,
  List,
  loadingStorage,
  loadingList,
}) => {
  useEffect(() => {
    getStor(1);
    getList();
  }, [getStor, getList]);

  return (
    <Sample
      Stor={Stor}
      List={List}
      loadingStorage={loadingStorage}
      loadingList={loadingList}
    />
  );
};

export default connect(
  ({ storage }) => ({
    Stor: storage.Stor,
    List: storage.List,
    loadingPost: storage.loading.GET_STORAGE,
    loadingList: storage.loading.GET_STORAGELIST,
  }),
  {
    getStor,
    getUsers,
  },
)(StorageContainer);
