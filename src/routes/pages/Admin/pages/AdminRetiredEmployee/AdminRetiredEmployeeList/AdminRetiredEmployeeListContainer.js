import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteRetiredEmployee,
  getRetiredEmployeeList,
} from 'store/modules/employee/employeeActions';
import AdminRetiredEmployeeListPresenter from './AdminRetiredEmployeeListPresenter';

const AdminRetiredEmployeeListContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const { data, loading, error } = useSelector(
    (state) => state.employee.retiredEmployeeList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRetiredEmployeeList());
    dispatch(getRetiredEmployeeList());
  }, [dispatch]);

  return (
    <AdminRetiredEmployeeListPresenter
      retiredEmployee={data}
      loading={loading}
      error={error}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default AdminRetiredEmployeeListContainer;
