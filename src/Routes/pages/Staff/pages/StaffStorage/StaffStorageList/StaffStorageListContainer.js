import React, { useEffect, useState } from 'react';
import StaffStorageListPresenter from './StaffStorageListPresenter';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffStorageListContainer() {
  const [storageList, setStorageList] = useState([]);

  const columns = [
    {
      title: '창고 코드',
      dataIndex: 'storageId',
      key: 'storageId',
      render: (id, index) => (
        <Link to={`/staff/storage/list/${index.storageId}`}>{id}</Link>
      ),
    },
    {
      title: '창고 주소',
      dataIndex: 'storageAddress',
      key: 'storageAddress',
    },
    {
      title: '창고 종류',
      dataIndex: 'storageCategory',
      key: 'storageCategory',
    },
    {
      title: '비고',
      dataIndex: 'storageDescription',
      key: 'storageDescription',
    },
  ];
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/storage/list')
      .then((reponse) => setStorageList(reponse.data));
  }, []);
  return (
    <StaffStorageListPresenter columns={columns} storageList={storageList} />
  );
}

export default StaffStorageListContainer;
