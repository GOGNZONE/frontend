import React, { useEffect } from 'react';
import AdminStorageListPresenter from './AdminStorageListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorageList,
  deleteStorage,
} from 'store/modules/storage/storageActions';

function AdminStorageListContainer() {
  const { data } = useSelector((state) => state.storage.storageList);

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
      onDeleteHandler={onDeleteHandler}
    />
  );
}

export default AdminStorageListContainer;
