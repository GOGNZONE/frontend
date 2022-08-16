import React, { useState, useEffect } from 'react';
import { getStockList } from '../../../../../../Apis/stockApi';
import AdminStockListPresenter from './AdminStockListPresenter';
import { Link } from 'react-router-dom';

function AdminStockListContainer() {
  const [stockList, setStockList] = useState([]);
  const getStockListApi = () => {
    getStockList().then((response) => setStockList(response.data));
  };

  useEffect(() => {
    getStockListApi();
  }, []);

  return <AdminStockListPresenter stockList={stockList} />;
}

export default AdminStockListContainer;
