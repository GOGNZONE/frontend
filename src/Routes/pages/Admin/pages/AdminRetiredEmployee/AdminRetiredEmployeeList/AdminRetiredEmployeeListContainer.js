import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRetiredEmployeeList } from 'store/modules/employee/employeeActions';
import AdminRetiredEmployeeListPresenter from './AdminRetiredEmployeeListPresenter';

const AdminRetiredEmployeeListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employee.retiredEmployeeList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRetiredEmployeeList());
  }, [dispatch]);

  console.log(data);
  return <AdminRetiredEmployeeListPresenter />;
};

export default AdminRetiredEmployeeListContainer;
