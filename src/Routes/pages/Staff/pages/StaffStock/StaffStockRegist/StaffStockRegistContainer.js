import React, { useState, useCallback } from 'react';
import StaffStockRegistPresenter from './StaffStockRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { registerStock } from 'store/modules/stock/stockActions';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

function StaffStockRegistContainer() {
  const { bomIdParams } = useParams();
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
    <StaffStockRegistPresenter
      registStock={registStock}
      onChangeInputHandler={onChangeInputHandler}
      storageIdInputHandler={storageIdInputHandler}
    />
  );
}

export default StaffStockRegistContainer;
