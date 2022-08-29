import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getEmployee } from 'store/modules/employee/employeeActions';
import AdminEmployeeDetailsPresenter from './AdminEmployeeDetailsPresenter';

const AdminEmployeeDetailsContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employee.employee,
  );
  const { employeeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee(employeeId));
  }, [employeeId, dispatch]);

  return (
    <AdminEmployeeDetailsPresenter
      employee={data}
      loading={loading}
      error={error}
    />
  );
};

export default AdminEmployeeDetailsContainer;
