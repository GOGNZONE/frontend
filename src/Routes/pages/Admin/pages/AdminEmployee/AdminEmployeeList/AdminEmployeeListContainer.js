import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEmployee,
  getEmployeeList,
} from 'store/modules/employee/employeeActions';
import AdminEmployeeListPresenter from './AdminEmployeeListPresenter';

const AdminEmployeeListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employee.employeeList,
  );
  const dispatch = useDispatch();

  // console.log(data);

  const onDeleteHandler = async (employeeId) => {
    dispatch(deleteEmployee(employeeId));
    dispatch(getEmployeeList());
  };

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    <AdminEmployeeListPresenter
      employeeList={data}
      loading={loading}
      error={error}
      onDeleteHandler={onDeleteHandler}
    />
  );
};

export default AdminEmployeeListContainer;
