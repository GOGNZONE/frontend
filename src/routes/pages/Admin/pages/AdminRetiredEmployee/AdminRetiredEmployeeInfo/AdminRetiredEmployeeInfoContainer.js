import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRetiredEmployee } from 'store/modules/employee/employeeActions';
import AdminRetiredEmployeeInfoPresenter from './AdminRetiredEmployeeInfoPresenter';

const AdminRetiredEmployeeInfoContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employee.retiredEmployee,
  );
  const dispatch = useDispatch();
  const { retiredEmployeeId } = useParams();
  console.log(data);

  useEffect(() => {
    dispatch(getRetiredEmployee(retiredEmployeeId));
  }, [dispatch]);
  return (
    data && (
      <AdminRetiredEmployeeInfoPresenter
        retiredEmployee={data}
        loading={loading}
        error={error}
      />
    )
  );
};

export default AdminRetiredEmployeeInfoContainer;
