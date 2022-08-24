import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeList } from 'store/modules/employee/employeeActions';
import AdminEmployeeListPresenter from './AdminEmployeeListPresenter';
const AdminEmployeeListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employee.employeeList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  return (
    <AdminEmployeeListPresenter
      employeeList={data}
      loading={loading}
      error={error}
    />
  );
};

export default AdminEmployeeListContainer;
