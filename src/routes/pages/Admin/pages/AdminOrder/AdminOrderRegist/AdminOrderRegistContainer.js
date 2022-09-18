import React, { useState, useCallback, useEffect } from 'react';
import AdminOrderRegistPresenter from './AdminOrderRegistPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { registerOrder } from 'store/modules/order/orderActions';
import { getClientList } from 'store/modules/client/clientActions';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const AdminOrderRegistContainer = () => {
  const [order, setOrder] = useState({
    orderId: '',
    orderProductionName: '',
    orderProductionBrandName: '',
    orderProductionPrice: '',
    orderProductionQuantity: '',
    orderProductionStandard: '',
    orderProductionUnit: '',
    orderProductionDescription: '',
    orderProductionEndDate: '',
    client: '',
  });
  const clientList = useSelector((state) => state.client.clientList.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(order);

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  const registOrder = () => {
    if (
      order.orderProductionName === '' ||
      order.orderProductionBrandName === '' ||
      order.orderProductionPrice === '' ||
      order.orderProductionQuantity === '' ||
      order.orderProductionStandard === '' ||
      order.orderProductionUnit === '' ||
      order.orderProductionEndDate === '' ||
      order.client === ''
    ) {
      message.error('필수값을 입력하세요');
    } else {
      dispatch(registerOrder(order));
      navigate('/admin/order/list');
      window.location.reload();
    }
  };

  const orderIdHandler = () => {
    const milli = Math.floor(Date.now() / 1000);
    onChange({
      ...order,
      orderId: milli,
    });
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
    onChange({
      ...order,
      [name]: value,
    });
  });
  const clientInputHandler = useCallback((name, e) => {
    onChange({
      ...order,
      client: {
        [name]: e,
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
      clientList={clientList}
      order={order}
      registOrder={registOrder}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      onChangeSelectHandler={onChangeSelectHandler}
      onChangeInputHandler={onChangeInputHandler}
      clientInputHandler={clientInputHandler}
      orderIdHandler={orderIdHandler}
    />
  );
};

export default AdminOrderRegistContainer;
