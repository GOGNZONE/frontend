import React, { useEffect } from 'react';
import StaffStorageListPresenter from './StaffStorageListPresenter';
import { connect } from 'react-redux';
import { getList } from '../../../../../../modules/storage';

const { useEffect } = React;
function StaffStorageListContainer({ getList, list, loadingList }) {
  useEffect(() => {
    const fn = async () => {
      try {
        await getList();
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, [getList]);
  return <StaffStorageListPresenter list={list} loadingList={loadingList} />;
}

export default connect(
  ({ storage, loading }) => ({
    list: storage.list,
    loadingList: loading['/storage/GET_LIST'],
  }),
  {
    getList,
  },
)(StaffStorageListContainer);
