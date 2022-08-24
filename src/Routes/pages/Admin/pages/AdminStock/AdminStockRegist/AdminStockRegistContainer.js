import React, { useCallback } from 'react';
import AdminStockRegistPresenter from './AdminStockRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminStockRegistContainer() {
  const stock = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();

  const onChange = useCallback((value) => {
    dispatch({ type: 'POST_STOCK', payload: value });
  });

  const registStock = (e) => {
    e.preventDefault();

    api.registerStock(stock);
  };
  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...stock,
      [name]: value,
    });
  });
  const onChangeInputHandler2 = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...stock,
      storage: {
        [name]: value,
      },
    });
  });

  return (
    <AdminStockRegistPresenter
      registStock={registStock}
      stock={stock}
      onChange={onChange}
      onChangeInputHandler={onChangeInputHandler}
      onChangeInputHandler2={onChangeInputHandler2}
    />
  );
}

export default AdminStockRegistContainer;
