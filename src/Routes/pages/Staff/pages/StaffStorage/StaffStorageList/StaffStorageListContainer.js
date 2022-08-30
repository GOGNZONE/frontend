import React, { useEffect } from 'react';
import StaffStorageListPresenter from 'routes/pages/Staff/pages/StaffStorage/StaffStorageList/StaffStorageListPresenter';
import { getStorageList } from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';

function StaffStorageListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.storage.storageList,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorageList());
  }, [dispatch]);

  return (
    <StaffStorageListPresenter
      storageList={data}
      loading={loading}
      error={error}
    />
  );
}

export default StaffStorageListContainer;
