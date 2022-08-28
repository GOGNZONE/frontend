import React, { useState, useEffect } from 'react';
import AdminOrderListPresenter from 'Routes/pages/Admin/pages/AdminOrder/AdminOrderList/AdminOrderListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList, deleteOrder } from 'store/modules/order/orderActions';

function AdminOrderListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.order.orderList,
  );
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  const onDeleteHandler = (orderId) => {
    dispatch(deleteOrder(orderId));
    window.location.reload();
  };

  return (
    <AdminOrderListPresenter
      orderList={data}
      onDeleteHandler={onDeleteHandler}
    />
  );
}

export default AdminOrderListContainer;
