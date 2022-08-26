import React, { useState, useEffect } from 'react';
import StaffStockListPresenter from 'Routes/pages/Staff/pages/StaffStock/StaffStockList/StaffStockListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';

function StaffStockListContainer() {
  const stockList = useSelector((state) => state.stock.stockList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    stockListApi();
  }, []);

  const stockListApi = async () => {
    const list = await api.getStockList();
    dispatch({ type: 'GET_STOCK_LIST', payload: list });
  };
  return <StaffStockListPresenter stockList={stockList} />;
}

export default StaffStockListContainer;
