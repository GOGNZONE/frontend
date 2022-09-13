import React, { useState, useEffect } from 'react';
import StaffOrderInfoPresenter from './StaffOrderInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from 'store/modules/order/orderActions';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

function StaffOrderInfoContainer() {
  const { orderIdParams } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.order.order);
  console.log(data);
  useEffect(() => {
    dispatch(getOrder(orderIdParams));
  }, [orderIdParams, dispatch]);
  return <StaffOrderInfoPresenter data={data} />;
}

export default StaffOrderInfoContainer;
