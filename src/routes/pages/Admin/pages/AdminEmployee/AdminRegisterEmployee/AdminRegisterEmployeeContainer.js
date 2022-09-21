import React, { useState, useCallback } from 'react';
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

  const onChangeHandler = (value) => {
    setEmployeeInfo(value);
  };

  const saveEmployee = async () => {
    if (employeeInfo) {
      await dispatch(registerEmployee(employeeInfo));
      navigate('/admin/employee/list');
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...employeeInfo,
        [name]: value,
      });
    },
    [employeeInfo],
  );

  const onChangeDatePickerHandler = useCallback(
    (name, value) => {
      onChangeHandler({
        ...employeeInfo,
        [name]: value,
      });
    },
    [employeeInfo],
  );

  const onChangeEmployeeRole = useCallback(
    (value) => {
      onChangeHandler({
        ...employeeInfo,
        employeeRole: value,
      });
    },
    [employeeInfo],
  );

  return (
    <AdminRegisterEmployeePresenter
      employeeInfo={employeeInfo}
      saveEmployee={saveEmployee}
      onChangeInputHandler={onChangeInputHandler}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      onChangeEmployeeRole={onChangeEmployeeRole}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default AdminRegisterEmployeeContainer;
