import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function StaffStorageListPresenter({ storageList, onDeleteHandler }) {
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
  return (
    <div>
      <Link to="/staff/Storage">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={storageList} />
    </div>
  );
}

export default StaffStorageListPresenter;
