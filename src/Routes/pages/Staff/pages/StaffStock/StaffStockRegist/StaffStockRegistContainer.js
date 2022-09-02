import React, { useEffect, useState, useCallback } from 'react';
import StaffStockRegistPresenter from './StaffStockRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { registerStock } from 'store/modules/stock/stockActions';
import { getStorageList } from 'store/modules/storage/storageActions';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function StaffStockRegistContainer() {
  const [stock, setStock] = useState({
    stockName: '',
    stockQuantity: '',
    stockDescription: '',
    storage: '',
  });
  const dispatch = useDispatch();
  const storageList = useSelector((state) => state.storage.storageList.data);
  const navigate = useNavigate();
  console.log(stock);

  useEffect(() => {
    dispatch(getStorageList());
  }, [dispatch]);

  const registStock = async (e) => {
    if (
      stock.stockQuantity === '' ||
      stock.storage === '' ||
      stock.stockName === ''
    ) {
      message.error('필수값을 입력하세요');
    } else {
      dispatch(registerStock(stock));
      navigate('/staff/stock/list');
      window.location.reload();
    }
  };

  const onChange = useCallback((value) => {
    setStock(value);
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...stock,
      [name]: value,
    });
  });

  const storageInputHandler = useCallback((name, e) => {
    onChange({
      ...stock,
      storage: {
        [name]: e,
      },
    });
  });

  return (
    <StaffStockRegistPresenter
      registStock={registStock}
      onChangeInputHandler={onChangeInputHandler}
      storageInputHandler={storageInputHandler}
      storageList={storageList}
    />
  );
}

export default StaffStockRegistContainer;
