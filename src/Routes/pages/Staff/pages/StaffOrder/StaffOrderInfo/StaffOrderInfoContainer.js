import React, { useState, useEffect } from 'react';
import StaffOrderInfoPresenter from './StaffOrderInfoPresenter';
import { getOrder } from '../../../../../../Apis/api/orderApi';
import { Link, useParams } from 'react-router-dom';

function StaffOrderInfoContainer() {
  const [order, setOrder] = useState([]);
  const { orderIdParams } = useParams();

  const getOrderApi = (orderIdParams) => {
    getOrder(orderIdParams).then((response) => {
      setOrder(response.data);
    });
  };
  useEffect(() => {
    getOrderApi(orderIdParams);
  }, []);

  return <StaffOrderInfoPresenter order={order} />;
}

export default StaffOrderInfoContainer;
