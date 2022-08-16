import React, { useState, useEffect } from 'react';
import AdminOrderInfoPresenter from './AdminOrderInfoPresenter';
import { getOrder } from '../../../../../../Apis/orderApi';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

function AdminOrderInfoContainer() {
  const [order, setOrder] = useState([]);
  const { orderIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);

  const getOrderApi = (orderIdParams) => {
    getOrder(orderIdParams).then((response) => {
      setOrder(response.data);
    });
  };
  useEffect(() => {
    getOrderApi(orderIdParams);
  }, []);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onButtonNameChange = () => {
    setUpdateButton(!updateButton);
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

  return (
    <AdminOrderInfoPresenter
      order={order}
      onChange={onChange}
      updateButton={updateButton}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onButtonNameChange={onButtonNameChange}
      onFormLayoutChange={onFormLayoutChange}
      orderIdParams={orderIdParams}
    />
  );
}

export default AdminOrderInfoContainer;
