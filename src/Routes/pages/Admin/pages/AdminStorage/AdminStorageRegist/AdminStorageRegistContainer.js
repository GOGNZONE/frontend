import React, { useState, useCallback } from 'react';
import AdminStorageRegistPresenter from 'routes/pages/Admin/pages/AdminStorage/AdminStorageRegist/AdminStorageRegistPresenter';
import { useDispatch } from 'react-redux';
import { registerStorage } from 'store/modules/storage/storageActions';
import { message } from 'antd';

function AdminStorageRegistContainer() {
  const [storage, setStorage] = useState({
    storageAddress: '',
    storageCategory: '',
    storageDescription: '',
  });
  const dispatch = useDispatch();
  const registStorage = (e) => {
    if (storage) {
      dispatch(registerStorage(storage));
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    setStorage({
      ...storage,
      [name]: value,
    });
  });

  return (
    <AdminStorageRegistPresenter
      registStorage={registStorage}
      storage={storage}
      onChangeInputHandler={onChangeInputHandler}
    />
  );
}

export default AdminStorageRegistContainer;
