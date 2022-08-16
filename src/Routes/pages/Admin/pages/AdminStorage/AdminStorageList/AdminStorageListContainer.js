import React, { useEffect, useState } from 'react';
import AdminStorageListPresenter from './AdminStorageListPresenter';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminStorageListContainer() {
  const [storageList, setStorageList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/storage/list')
      .then((reponse) => setStorageList(reponse.data));
  }, []);
  return <AdminStorageListPresenter storageList={storageList} />;
}

export default AdminStorageListContainer;
