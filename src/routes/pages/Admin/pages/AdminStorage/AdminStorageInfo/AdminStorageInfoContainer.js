import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getStorage,
  putStorage,
  deleteStorage,
} from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';
import AdminStorageInfoPresenter from './AdminStorageInfoPresenter';
import AdminStorageUpdate from './AdminStorageUpdate';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function AdminStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [page, setPage] = useState(true);
  const [storage, setStorage] = useState({
    storageAddress: '',
    storageCategory: '',
    storageDescription: '',
  });

  const { data } = useSelector((state) => state.storage.storage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataInsert = () => {
    setStorage({
      storageId: data.storageId,
      storageAddress: data.storageAddress,
      storageCategory: data.storageCategory,
      storageDescription: data.storageDescription,
    });
  };

  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [storageIdParams, dispatch]);

  const changePageHandler = () => {
    setPage(!page);
  };

  const onChange = (value) => {
    setStorage(value);
  };

  const onChangeInputHandler = (name, e) => {
    const value = e.target.value;
    onChange({
      ...storage,
      [name]: value,
    });
  };

  const updateStorageHandler = useCallback(async (e) => {
    if (storage.storageAddress === '') {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(putStorage({ storageIdParams, storage }));
      changePageHandler();
      window.location.reload();
    }
  });
  const onDeleteHandler = (storageId) => {
    dispatch(deleteStorage(storageId));
    navigate('/admin/storage/list');
    window.location.reload();
  };

  return page ? (
    <AdminStorageInfoPresenter
      changePageHandler={changePageHandler}
      data={data}
      onDeleteHandler={onDeleteHandler}
    />
  ) : (
    <AdminStorageUpdate
      updateStorageHandler={updateStorageHandler}
      onChangeInputHandler={onChangeInputHandler}
      changePageHandler={changePageHandler}
      data={data}
      dataInsert={dataInsert}
    />
  );
}

export default AdminStorageInfoContainer;
