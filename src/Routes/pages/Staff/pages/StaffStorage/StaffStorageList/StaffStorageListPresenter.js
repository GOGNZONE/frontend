import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

function StaffStorageListPresenter({ columns, storageList }) {
  return (
    <div>
      <Link to="/staff/Storage">
        <Button>등록</Button>
      </Link>
      <Table columns={columns} dataSource={storageList} />
    </div>
  );
}

export default StaffStorageListPresenter;
