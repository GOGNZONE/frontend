import React, { useState, useEffect } from 'react';
import AdminOrderListPresenter from './AdminOrderListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminOrderListContainer() {
  const orderList = useSelector((state) => state.order.orderList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    orderListApi();
  }, []);

  const orderListApi = async () => {
    const list = await api.getOrderList();
    dispatch({ type: 'GET_ORDER_LIST', payload: list });
  };

  return <AdminOrderListPresenter orderList={orderList} />;
}

export default AdminOrderListContainer;
