import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
function StaffStockListPresenter({ stockList }) {
  const columns = [
    {
      title: '재고 코드',
      dataIndex: 'stockId',
      key: 'stockId',
      render: (id, index) => (
        <Link to={`/staff/stock/list/${index.stockId}`}>{id}</Link>
      ),
    },
    {
      title: '재고 상품명',
      dataIndex: 'stockName',
      key: 'stockName',
    },
    {
      title: '재고 수량',
      dataIndex: 'stockQuantity',
      key: 'stockQuantity',
    },
    {
      title: '비고',
      dataIndex: 'stockDescription',
      key: 'stockDescription',
    },
  ];
  return (
    <div>
      <Link to="/staff/stock">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={stockList} />
    </div>
  );
}

export default StaffStockListPresenter;
