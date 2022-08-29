import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEmployee,
  getEmployeeList,
} from 'store/modules/employee/employeeActions';
import AdminEmployeeListPresenter from './AdminEmployeeListPresenter';

const AdminEmployeeListContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
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
    <AdminEmployeeListPresenter
      employeeList={data}
      loading={loading}
      error={error}
      onDeleteHandler={onDeleteHandler}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default AdminEmployeeListContainer;
