import React, { useState, useEffect } from 'react';
import AdminStockListPresenter from './AdminStockListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminStockListContainer() {
  const stockList = useSelector((state) => state.stock.stockList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    stockListApi();
  }, []);

  const stockListApi = async () => {
    const list = await api.getStockList();
    dispatch({ type: 'GET_STOCK_LIST', payload: list });
  };

  return <AdminStockListPresenter stockList={stockList} />;
}

export default AdminStockListContainer;
