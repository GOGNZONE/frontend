import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerEmployee } from 'store/modules/employee/employeeActions';
import AdminRegisterEmployeePresenter from './AdminRegisterEmployeePresenter';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminRegisterEmployeeContainer = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    employeeId: '',
    employeeName: '',
    employeePassword: '',
    employeeAddress: '',
    employeeEmail: '',
    employeePhone: '',
    employeeHiredate: '',
    employeeImage: '',
    employeeRole: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo({
      ...employeeInfo,
      [name]: value,
    });
  };

  const saveEmployee = () => {
    if (employeeInfo) {
      dispatch(registerEmployee(employeeInfo));
      navigate('/admin/employee/list');
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  return (
    <AdminRegisterEmployeePresenter
      employeeInfo={employeeInfo}
      onChangeHandler={onChangeHandler}
      saveEmployee={saveEmployee}
    />
  );
};

export default AdminRegisterEmployeeContainer;
