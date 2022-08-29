import React, { useState, useEffect } from 'react';
import AdminOrderInfoPresenter from './AdminOrderInfoPresenter';
import AdminOrderUpdate from './AdminOrderUpdate';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';

function AdminOrderInfoContainer() {
  const { orderIdParams } = useParams();
  const [order, setOrder] = useState([]);
  const [page, setPage] = useState(true);
  const dispatch = useDispatch();
  const changePageHandler = () => {
    setPage(!page);
    console.log(page);
  };

  const onChange = (e) => {
    let { value, name } = '';

    if (e.target === undefined) {
      if (moment.isMoment(e.value)) {
        value = e.value.format('YYYY-MM-DD');
        name = e.name;
      } else {
        value = parseInt(e.value);
        name = e.name;
      }
    } else {
      value = e.target.value;
      name = e.target.name;
    }

    setOrder({
      ...order,
      [name]: value,
    });
  };

  return page ? (
    <AdminOrderInfoPresenter changePageHandler={changePageHandler} />
  ) : (
    <AdminOrderUpdate changePageHandler={changePageHandler} />
  );
}

export default AdminOrderInfoContainer;
