import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
const BomListPresenter = ({ columns, bomList }) => {
  return (
    <div>
      <Link to="/staff/bom">
        <Button>등록</Button>
      </Link>
      <Table columns={columns} dataSource={bomList} />
    </div>
  );
};

export default BomListPresenter;
