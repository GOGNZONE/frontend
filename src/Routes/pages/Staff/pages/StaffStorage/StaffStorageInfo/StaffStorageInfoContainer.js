import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from './StaffStorageInfoPresenter';
import { getStorage, putStorage } from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function StaffStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const { data, loading, error } = useSelector(
    (state) => state.storage.storage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [storageIdParams, dispatch]);

  return <StaffStorageInfoPresenter data={data} />;
}

export default StaffStorageInfoContainer;
