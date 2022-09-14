import React from 'react';
import { Typography, Table, Button } from 'antd';
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          창고 목록
        </Typography.Title>
        <Link to="/staff/Storage">
          <Button>등록</Button>
        </Link>
      </div>

      <Table
        showSorterTooltip={{ title: '정렬' }}
        rowKey={() => v4()}
        columns={columns}
        dataSource={storageList}
      />
    </div>
  );
}

export default StaffStorageListPresenter;
