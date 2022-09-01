import React, { useState, useEffect } from 'react';
import AdminOrderListPresenter from './AdminOrderListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList, deleteOrder } from 'store/modules/order/orderActions';

function AdminOrderListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.order.orderList,
  );
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useDispatch();
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
      setDeleteModal={setDeleteModal}
      deleteModal={deleteModal}
    />
  );
}

export default AdminOrderListContainer;
