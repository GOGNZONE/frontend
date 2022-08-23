import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../../../../../modules/employees';
import AdminEmployeeListPresenter from './AdminEmployeeListPresenter';

const AdminEmployeeListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.employees.employees,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees);
  }, [dispatch]);

  return <AdminEmployeeListPresenter employees={data} />;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;
};

export default AdminEmployeeListContainer;
