import React, { useCallback } from 'react';
import AdminStorageRegistPresenter from './AdminStorageRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminStorageRegistContainer() {
  const storage = useSelector((state) => state.storage.storage);
  const dispatch = useDispatch();

  const onChange = useCallback((value) => {
    dispatch({ type: 'POST_STORAGE', payload: value });
  });

  const registStorage = (e) => {
    e.preventDefault();
    api.registerStorage(storage);
  };

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
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
