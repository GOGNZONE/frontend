import React, { useState, useEffect } from 'react';
import { getStockList } from '../../../../../../Apis/stockApi';
import StaffStockListPresenter from './StaffStockListPresenter';

function StaffStockListContainer() {
  const [stockList, setStockList] = useState([]);
  const getStockListApi = () => {
    getStockList().then((response) => setStockList(response.data));
  };

  useEffect(() => {
    getStockListApi();
  }, []);

  return <StaffStockListPresenter stockList={stockList} />;
}

export default StaffStockListContainer;
