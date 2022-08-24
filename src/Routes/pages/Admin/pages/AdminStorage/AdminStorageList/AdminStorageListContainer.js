import React, { useEffect, useState } from 'react';
import AdminStorageListPresenter from './AdminStorageListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminStorageListContainer() {
  const storageList = useSelector((state) => state.storage.storageList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    storageListApi();
  }, []);

  const storageListApi = async () => {
    const list = await api.getStorageList();
    dispatch({ type: 'GET_STOR_LIST', payload: list });
  };
  return <AdminStorageListPresenter storageList={storageList} />;
}

export default AdminStorageListContainer;
