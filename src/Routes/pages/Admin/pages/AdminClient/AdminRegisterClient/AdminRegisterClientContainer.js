import { message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerClient } from 'store/modules/client/clientActions';
import { getEmployeeList } from 'store/modules/employee/employeeActions';
import AdminRegisterClientPresenter from './AdminRegisterClientPresenter';

const AdminRegisterClientContainer = () => {
  const [clientInfo, setClientInfo] = useState({
    clientName: '',
    clientManger: '',
    clientTel: '',
    clientAddress: '',
    clientFile: '',
    employee: { employeeId: '' },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector(
    (state) => state.employee.employeeList,
  );

  const saveClient = async () => {
    if (clientInfo) {
      await dispatch(registerClient(clientInfo));
      navigate('/admin/client/list');
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const onChangeHandler = (value) => {
    setClientInfo(value);
  };

  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...clientInfo,
        [name]: value,
      });
    },
    [clientInfo],
  );

  const onChangeEmployeeHandler = useCallback(
    (value) => {
      onChangeHandler({
        ...clientInfo,
        employee: {
          employeeId: value,
        },
      });
    },
    [clientInfo],
  );

  const onResetHandler = useCallback(() => {
    onChangeHandler({
      clientName: '',
      clientManger: '',
      clientTel: '',
      clientAddress: '',
      clientFile: '',
      employee: { employeeId: '' },
    });
    navigate('/admin/client/list');
  }, [clientInfo]);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    data && (
      <AdminRegisterClientPresenter
        clientInfo={clientInfo}
        employeeList={data}
        loading={loading}
        error={error}
        saveClient={saveClient}
        onChangeInputHandler={onChangeInputHandler}
        onChangeEmployeeHandler={onChangeEmployeeHandler}
        onResetHandler={onResetHandler}
      />
    )
  );
};

export default AdminRegisterClientContainer;
