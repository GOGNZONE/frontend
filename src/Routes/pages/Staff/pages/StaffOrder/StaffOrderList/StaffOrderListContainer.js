import React, { useState, useEffect } from 'react';
import StaffOrderListPresenter from './StaffOrderListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList, deleteOrder } from 'store/modules/order/orderActions';

function StaffOrderListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.order.orderList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  const onDeleteHandler = (orderId) => {
    dispatch(deleteOrder(orderId));
    window.location.reload();
  };

  return (
    <StaffOrderListPresenter
      orderList={data}
      onDeleteHandler={onDeleteHandler}
    />
  );
}

export default StaffOrderListContainer;
