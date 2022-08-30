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

  const onDeleteHandler = async (employeeId) => {
    await dispatch(deleteEmployee(employeeId));
    dispatch(getEmployeeList());
  };

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    data && (
      <AdminEmployeeListPresenter
        employeeList={data}
        loading={loading}
        error={error}
        onDeleteHandler={onDeleteHandler}
      />
    )
  );
};

export default AdminEmployeeListContainer;
