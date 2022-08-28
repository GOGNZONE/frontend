import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function AdminOrderListPresenter({ orderList, onDeleteHandler }) {
  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id, index) => (
        <Link to={`/admin/order/list/${index.orderId}`}>{id}</Link>
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
    {
      title: '삭제',
      dataIndex: 'orderId',
      key: 'orderId',
      align: 'center',
      render: (id, index) => (
        <Link to="admin/order/list">
          <Button
            type="primary"
            size="middle"
            style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
            onClick={() => onDeleteHandler(`${index.orderId}`)}
          >
            삭제
          </Button>
        </Link>
      ),
    },
  ];
  return (
    <div>
      <h2>발주 리스트</h2>
      <Link to="/admin/order">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={orderList} />
    </div>
  );
}

export default AdminOrderListPresenter;