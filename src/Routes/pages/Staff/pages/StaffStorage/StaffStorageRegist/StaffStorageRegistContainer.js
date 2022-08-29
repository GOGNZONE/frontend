import React, { useState, useCallback } from 'react';
import StaffStorageRegistPresenter from './StaffStorageRegistPresenter';
import { useDispatch } from 'react-redux';
import { registerStorage } from 'store/modules/storage/storageActions';
import { message } from 'antd';

function StaffStorageRegistContainer() {
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
    <StaffStorageRegistPresenter
      registStorage={registStorage}
      onChangeInputHandler={onChangeInputHandler}
    />
  );
}

export default StaffStorageRegistContainer;
