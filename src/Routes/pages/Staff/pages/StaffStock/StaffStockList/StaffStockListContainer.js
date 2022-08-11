import React, { useState, useEffect } from 'react';
import { getStock, getStockList } from '../../../../../../Apis/api/stockApi';
import StaffStockListPresenter from './StaffStockListPresenter';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffStockListContainer() {
  const [stockList, setStockList] = useState([]);
  const getStockListApi = () => {
    getStockList().then((response) => setStockList(response.data));
  };

  useEffect(() => {
    getStockListApi();
  }, []);

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
  return <StaffStockListPresenter columns={columns} stockList={stockList} />;
}

export default StaffStockListContainer;
