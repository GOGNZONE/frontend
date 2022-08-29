import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStorage, putStorage } from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';
import AdminStorageInfoPresenter from './AdminStorageInfoPresenter';
import AdminStorageUpdate from './AdminStorageUpdate';
import { message } from 'antd';
import moment from 'moment';

function AdminStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [page, setPage] = useState(true);
  const [storage, setStorage] = useState({
    storagaAddress: '',
    storagaCategory: '',
    storagaDescription: '',
  });
  const [updateButton, setUpdateButton] = useState(true);
  const { data, loading, error } = useSelector(
    (state) => state.storage.storage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [storageIdParams, dispatch]);

  console.log(storage);

  const changePageHandler = () => {
    setPage(!page);
  };

  const onChange = useCallback((value) => {
    setStorage(value);
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...updateButton,
      [name]: value,
    });
  });

  const updateStorageHandler = useCallback(async (e) => {
    if (storage.storagaAddress === '') {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(putStorage(storageIdParams, storage));
      // await navigate('list');
    }
  });

  return page ? (
    <AdminStorageInfoPresenter
      changePageHandler={changePageHandler}
      data={data}
    />
  ) : (
    <AdminStorageUpdate
      updateStorageHandler={updateStorageHandler}
      onChangeInputHandler={onChangeInputHandler}
      changePageHandler={changePageHandler}
      data={data}
    />
  );
}

export default AdminStorageInfoContainer;
