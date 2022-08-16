import React, { useState, useEffect } from 'react';
import { getOrderList } from '../../../../../../Apis/orderApi';

import StaffOrderListPresenter from './StaffOrderListPresenter';
function StaffOrderListContainer() {
  const [orderList, setOrderList] = useState([]);
  const getOrderApi = () => {
    getOrderList().then((response) => {
      setOrderList(response.data);
    });
  };

  useEffect(() => {
    getOrderApi();
  }, []);

  return <StaffOrderListPresenter orderList={orderList} />;
}

export default StaffOrderListContainer;
