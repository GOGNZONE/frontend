import React from 'react';
import { Table } from 'antd';

function StaffStockListPresenter({ columns, stockList }) {
  return <Table columns={columns} dataSource={stockList} />;
}

export default StaffStockListPresenter;
