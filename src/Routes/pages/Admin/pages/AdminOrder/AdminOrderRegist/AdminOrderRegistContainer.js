import React, { useState, useCallback, useEffect } from 'react';
import AdminOrderRegistPresenter from 'Routes/pages/Admin/pages/AdminOrder/AdminOrderRegist/AdminOrderRegistPresenter';
import { useDispatch } from 'react-redux';
import { registerOrder } from 'store/modules/order/orderActions';
import { getClientList } from 'store/modules/client';
import { message } from 'antd';

const AdminOrderRegistContainer = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState({
    orderProductionName: '',
    orderProductionBrandName: '',
    orderProductionPrice: '',
    orderProductionQuantity: '',
    orderProductionStandard: '',
    orderProductionUnit: '',
    orderProductionDescription: '',
    orderProductionEndDate: '',
    orderProuctionFile: '',
  });
  console.log(order);
  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);
  const registOrder = (e) => {
    if (order) {
      dispatch(registerOrder(order));
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const onChange = useCallback((value) => {
    setOrder(value);
  });

  const onChangeSelectHandler = useCallback((name, value) => {
    onChange({
      ...order,
      [name]: value,
    });
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    setOrder({
      ...order,
      [name]: value,
    });
  });
  const clientInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    setOrder({
      ...order,
      client: {
        [name]: value,
      },
    });
  });
  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChange({
      ...order,
      [name]: value,
    });
  });

  return (
    <AdminOrderRegistPresenter
      order={order}
      registOrder={registOrder}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      onChangeSelectHandler={onChangeSelectHandler}
      onChangeInputHandler={onChangeInputHandler}
      clientInputHandler={clientInputHandler}
    />
  );
};

export default AdminOrderRegistContainer;
