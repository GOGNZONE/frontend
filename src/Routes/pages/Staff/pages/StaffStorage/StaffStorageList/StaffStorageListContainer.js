import React, { useEffect } from 'react';
import StaffStorageListPresenter from './StaffStorageListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function StaffStorageListContainer() {
  const storList = useSelector((state) => state.storage.storageList.data);
  const dispatch = useDispatch();
  useEffect(() => {
    storageListApi();
  }, []);
  const storageListApi = async () => {
    const list = await api.getStorageList();
    dispatch({ type: 'GET_STOR_LIST', payload: list });
  };

  return <StaffStorageListPresenter storList={storList} />;
}

export default StaffStorageListContainer;
