import React from 'react';
import { Table } from 'antd';
function StaffOrderListPresenter({ columns, orderList }) {
  return <Table columns={columns} dataSource={orderList} />;
}

export default StaffOrderListPresenter;
