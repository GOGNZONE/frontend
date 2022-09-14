import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStock } from 'store/modules/stock/stockActions';
import StaffStockInfoPresenter from './StaffStockInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';

function StaffStockInfoContainer() {
  const { stockIdParams } = useParams();
  const { data } = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStock(stockIdParams));
  }, [stockIdParams, dispatch]);

  return <StaffStockInfoPresenter data={data} />;
}

export default StaffStockInfoContainer;
