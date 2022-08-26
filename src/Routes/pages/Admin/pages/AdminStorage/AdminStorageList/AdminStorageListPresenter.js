import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function AdminStorageListPresenter({ storageList, onDeleteHandler }) {
  const columns = [
    {
      title: '창고 코드',
      dataIndex: 'storageId',
      key: 'storageId',
      render: (id, index) => (
        <Link to={`/admin/storage/list/${index.storageId}`}>{id}</Link>
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
    {
      title: '삭제',
      dataIndex: 'storageId',
      key: 'storageId',
      align: 'center',
      render: (id, index) => (
        <Button
          type="primary"
          size="middle"
          style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
          onClick={() => onDeleteHandler(`${index.storageId}`)}
        >
          삭제
        </Button>
      ),
    },
  ];
  return (
    <div>
      <Link to="/admin/Storage">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={storageList} />
    </div>
  );
}

export default AdminStorageListPresenter;
