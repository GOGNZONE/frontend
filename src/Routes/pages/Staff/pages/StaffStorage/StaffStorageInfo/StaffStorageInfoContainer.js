import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from './StaffStorageInfoPresenter';
import {
  getStorage,
  deleteStorage,
} from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';

function StaffStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const { data } = useSelector((state) => state.storage.storage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [storageIdParams, dispatch]);

  const onDeleteHandler = () => {
    dispatch(deleteStorage(storageIdParams));
  };

  return (
    <StaffStorageInfoPresenter onDeleteHandler={onDeleteHandler} data={data} />
  );
}

export default StaffStorageInfoContainer;
