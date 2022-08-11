import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
function StaffStockListPresenter({ columns, stockList }) {
  return (
    <div>
      <Link to="/staff/stock">
        <Button>등록</Button>
      </Link>
      <Table columns={columns} dataSource={stockList} />
    </div>
  );
}

export default StaffStockListPresenter;
