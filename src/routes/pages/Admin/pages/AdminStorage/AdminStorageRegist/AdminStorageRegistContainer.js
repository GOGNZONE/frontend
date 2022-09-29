import React, { useState, useCallback } from 'react';
import AdminStorageRegistPresenter from './AdminStorageRegistPresenter';
import { useDispatch } from 'react-redux';
import { registerStorage } from 'store/modules/storage/storageActions';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

function AdminStorageRegistContainer() {
  const [storage, setStorage] = useState({
    storageAddress: '',
    storageCategory: '',
    storageDescription: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registStorage = (e) => {
    if (storage.storageAddress === '' || storage.storageCategory === '') {
      message.error('필수값을 입력하세요');
    } else {
      dispatch(registerStorage(storage));
      navigate('/admin/storage/list');
      window.location.reload();
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
      onChangeInputHandler={onChangeInputHandler}
    />
  );
}

export default AdminStorageRegistContainer;
