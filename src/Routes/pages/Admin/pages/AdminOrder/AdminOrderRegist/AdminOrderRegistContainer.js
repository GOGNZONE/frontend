import React, { useState, useCallback } from 'react';
import AdminOrderRegistPresenter from 'routes/pages/Admin/pages/AdminOrder/AdminOrderRegist/AdminOrderRegistPresenter';
import { useDispatch } from 'react-redux';
import { registerOrder } from 'store/modules/order/orderActions';
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
  const registOrder = (e) => {
    if (order) {
      dispatch(registerOrder(order));
    } else {
      message.error('필수값을 입력하세요');
    }
  };
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

  return (
    <AdminOrderRegistPresenter
      order={order}
      registOrder={registOrder}
      onChangeInputHandler={onChangeInputHandler}
      clientInputHandler={clientInputHandler}
    />
  );
};

export default AdminOrderRegistContainer;
