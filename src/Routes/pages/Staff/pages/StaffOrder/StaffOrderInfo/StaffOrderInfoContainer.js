import React, { useState, useEffect } from 'react';
import StaffOrderInfoPresenter from 'routes/pages/Staff/pages/StaffOrder/StaffOrderInfo/StaffOrderInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';
import { useParams } from 'react-router-dom';
import moment from 'moment';
function StaffOrderInfoContainer() {
  const { orderIdParams } = useParams();
  const orderInfo = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);

  useEffect(() => {
    orderInfoApi(orderIdParams);
  }, []);
  const orderInfoApi = async (IdParam) => {
    const info = await api.getOrderInfo(IdParam);
    dispatch({ type: 'GET_ORDER', payload: info });
  };
  console.log(orderInfo);
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
  };

  return (
    <StaffOrderInfoPresenter
      orderInfo={orderInfo}
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

export default StaffOrderInfoContainer;
