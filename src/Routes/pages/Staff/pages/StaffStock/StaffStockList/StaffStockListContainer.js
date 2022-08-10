import React, { useState, useEffect } from 'react';
import StaffStockListPresenter from './StaffStockListPresenter';
import axios from 'axios';

function StaffStockListContainer() {
  const [stockList, setStockList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/stock/list')
      .then((response) => setStockList(response.data));
  }, []);
  const columns = [
    {
      title: '재고 코드',
      dataIndex: 'stockId',
      key: 'stockId',
      render: (id) => (
        // <Link to={`/staff/storage/list/${id}`}>
        <a>{id}</a>
        // </Link>
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
  return <StaffStockListPresenter columns={columns} stockList={stockList} />;
}

export default StaffStockListContainer;
