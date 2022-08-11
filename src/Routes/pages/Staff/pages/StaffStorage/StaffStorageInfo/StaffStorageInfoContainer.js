import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from './StaffStorageInfoPresenter';
import { getStorage } from '../../../../../../Apis/api/storageApi';
import axios from 'axios';

function StaffStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [storage, setStorage] = useState([]);

  const getStorageApi = (storageIdParams) => {
    getStorage(storageIdParams).then((response) => {
      setStorage(response.data);
    });
  };
  useEffect(() => {
    getStorageApi(storageIdParams);
  }, []);

  return <StaffStorageInfoPresenter storage={storage} />;
}

export default StaffStorageInfoContainer;
