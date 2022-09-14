import React, { useEffect } from 'react';
import StaffStockListPresenter from './StaffStockListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getStockList, deleteStock } from 'store/modules/stock/stockActions';

function StaffStockListContainer() {
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
    data && (
      <StaffStockListPresenter
        onDeleteHandler={onDeleteHandler}
        stockList={data}
        loading={loading}
        error={error}
      />
    )
  );
}

export default StaffStockListContainer;
