import React from 'react';
import { Typography, Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import Loading from 'components/Loading';

function StaffStockListPresenter({ stockList, loading, error }) {
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
  return stockList ? (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          재고 목록
        </Typography.Title>
        <Link to="/staff/stock">
          <Button>등록</Button>
        </Link>
      </div>
      <Table rowKey={() => v4()} columns={columns} dataSource={stockList} />
    </div>
  ) : (
    <Loading loading={loading} error={error} />
  );
}

export default StaffStockListPresenter;
