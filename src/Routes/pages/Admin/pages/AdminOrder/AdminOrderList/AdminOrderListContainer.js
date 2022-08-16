import React, { useState, useEffect } from 'react';
import { getOrderList } from '../../../../../../Apis/orderApi';
import { Link } from 'react-router-dom';
import AdminOrderListPresenter from './AdminOrderListPresenter';
function AdminOrderListContainer() {
  const [orderList, setOrderList] = useState([]);
  const getOrderApi = () => {
    getOrderList().then((response) => {
      setOrderList(response.data);
    });
  };

  useEffect(() => {
    getOrderApi();
  }, []);

  return <AdminOrderListPresenter orderList={orderList} />;
}

export default AdminOrderListContainer;
