import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
function StaffOrderListPresenter({ orderList }) {
  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id, index) => (
        <Link to={`/staff/order/list/${index.orderId}`}>{id}</Link>
      ),
    },
    {
      title: '주문 제품명',
      dataIndex: 'orderProductionName',
      key: 'orderProductionName',
    },
    {
      title: '주문 제품 브랜드명',
      dataIndex: 'orderProductionBrandName',
      key: 'orderProductionBrandName',
    },
    {
      title: '주문 제품 가격',
      dataIndex: 'orderProductionPrice',
      key: 'orderProductionPrice',
    },
    {
      title: '주문 수량',
      dataIndex: 'orderProductionQuantity',
      key: 'orderProductionQuantity',
    },
    {
      title: '비고',
      dataIndex: 'orderProductionDescription',
      key: 'orderProductionDescription',
    },
  ];
  return <Table rowKey={() => v4()} columns={columns} dataSource={orderList} />;
}

export default StaffOrderListPresenter;
