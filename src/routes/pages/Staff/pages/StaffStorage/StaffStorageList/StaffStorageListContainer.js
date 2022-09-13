import React, { useEffect, useState } from 'react';
import StaffStorageListPresenter from './StaffStorageListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorageList,
  deleteStorage,
} from 'store/modules/storage/storageActions';

function StaffStorageListContainer() {
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
    <StaffStorageListPresenter
      storageList={data}
      loading={loading}
      error={error}
      onDeleteHandler={onDeleteHandler}
    />
  );
}

export default StaffStorageListContainer;
