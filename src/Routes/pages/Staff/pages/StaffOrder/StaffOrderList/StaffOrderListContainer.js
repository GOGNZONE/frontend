import React, { useEffect } from 'react';
import StaffOrderListPresenter from 'routes/pages/Staff/pages/StaffOrder/StaffOrderList/StaffOrderListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';

function StaffOrderListContainer() {
  const orderList = useSelector((state) => state.order.orderList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    orderListApi();
  }, []);

  const orderListApi = async () => {
    const list = await api.getOrderList();
    dispatch({ type: 'GET_ORDER_LIST', payload: list });
  };

  return <StaffOrderListPresenter orderList={orderList} />;
}

export default StaffOrderListContainer;
