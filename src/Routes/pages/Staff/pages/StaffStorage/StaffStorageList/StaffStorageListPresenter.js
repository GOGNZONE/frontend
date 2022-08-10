import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

function StaffStorageListPresenter({ columns, storageList }) {
  return (
    <div>
      <Link to="/staff/Storage">
        <button>등록</button>
      </Link>
      <Table columns={columns} dataSource={storageList} />
    </div>
  );
}

export default StaffStorageListPresenter;
