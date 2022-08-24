import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getEmployee } from 'store/modules/employee/employeeActions';
import AdminEmployeeDetailsPresenter from './AdminEmployeeDetailsPresenter';

const AdminEmployeeDetailsContainer = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.employee.employee,
  );

  useEffect(() => {
    dispatch(getEmployee(employeeId));
  }, [employeeId, dispatch]);

  console.log(data);

  return (
    <AdminEmployeeDetailsPresenter
      employee={data}
      loading={loading}
      error={error}
    />
  );
};

export default AdminEmployeeDetailsContainer;
