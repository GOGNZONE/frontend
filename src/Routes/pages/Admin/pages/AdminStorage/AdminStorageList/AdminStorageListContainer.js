import React, { useEffect, useState } from 'react';
import AdminStorageListPresenter from './AdminStorageListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorageList,
  deleteStorage,
} from 'store/modules/storage/storageActions';

function AdminStorageListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.storage.storageList,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorageList());
  }, [dispatch]);

  const onDeleteHandler = (storageId) => {
    dispatch(deleteStorage(storageId));
    window.location.reload();
  };

  return (
    <AdminStorageListPresenter
      storageList={data}
      loading={loading}
      error={error}
      onDeleteHandler={onDeleteHandler}
    />
  );
}

export default AdminStorageListContainer;
