import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerEmployee } from 'store/modules/employee/employeeActions';
import AdminRegisterEmployeePresenter from './AdminRegisterEmployeePresenter';
import { message } from 'antd';

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

  const onChangeHandler = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setEmployeeInfo({
      ...employeeInfo,
      [name]: value,
    });
  };

  const saveEmployee = () => {
    if (employeeInfo) {
      dispatch(registerEmployee(employeeInfo));
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const fileUpload = () => {};
  return (
    <AdminRegisterEmployeePresenter
      employeeInfo={employeeInfo}
      onChangeHandler={onChangeHandler}
      saveEmployee={saveEmployee}
      fileUpload={fileUpload}
    />
  );
};

export default AdminRegisterEmployeeContainer;
