import React, { useState, useEffect } from 'react';
import AdminStockListPresenter from 'Routes/pages/Admin/pages/AdminStock/AdminStockList/AdminStockListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getStockList, deleteStock } from 'store/modules/stock/stockActions';

function AdminStockListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.stock.stockList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStockList());
  }, [dispatch]);

  const onDeleteHandler = (stockId) => {
    dispatch(deleteStock(stockId));
    window.location.reload();
  };

  return (
    <AdminStockListPresenter
      onDeleteHandler={onDeleteHandler}
      stockList={data}
    />
  );
}

export default AdminStockListContainer;
