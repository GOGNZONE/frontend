import React from 'react';
import { Typography, Table } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function StaffOrderListPresenter({ orderList, onDeleteHandler }) {
  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id, index) => (
        <Link to={`/Staff/order/list/${index.orderId}`}>{id}</Link>
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
  return (
    <div>
      <Typography.Title level={3} style={{ marginBottom: 25 }}>
        발주 목록
      </Typography.Title>
      <Table rowKey={() => v4()} columns={columns} dataSource={orderList} />
    </div>
  );
}

export default StaffOrderListPresenter;
