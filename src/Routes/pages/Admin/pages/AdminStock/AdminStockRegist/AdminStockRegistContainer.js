import React, { useState, useCallback } from 'react';
import AdminStockRegistPresenter from 'Routes/pages/Admin/pages/AdminStock/AdminStockRegist/AdminStockRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { registerStock } from 'store/modules/stock/stockActions';
import { message } from 'antd';

function AdminStockRegistContainer() {
  const [stock, setStock] = useState({
    stockName: '',
    stockQuantity: '',
    stockDescription: '',
  });
  const dispatch = useDispatch();

  const registStock = (e) => {
    if (stock) {
      dispatch(registerStock(stock));
    } else {
      message.error('필수값을 입력하세요');
    }
  };
  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    setStock({
      ...stock,
      [name]: value,
    });
  });
  const storageIdInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    setStock({
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
      onChangeInputHandler={onChangeInputHandler}
      storageIdInputHandler={storageIdInputHandler}
    />
  );
}

export default AdminStockRegistContainer;