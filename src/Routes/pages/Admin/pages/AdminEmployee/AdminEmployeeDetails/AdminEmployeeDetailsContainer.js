import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getEmployee } from 'store/modules/employee/employeeActions';
import AdminEmployeeDetailsPresenter from './AdminEmployeeDetailsPresenter';
import AdminUpdateEmployee from './AdminUpdateEmployee';

const AdminEmployeeDetailsContainer = () => {
  const [updateEmployeeValue, setUpdateEmployeeValue] = useState({
    employeeName: '',
    employeePhone: '',
    employeeAddress: '',
    employeeEmail: '',
  });
  const [page, setPage] = useState(true);
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.employee.employee,
  );

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateEmployeeValue({
      ...updateEmployeeValue,
      [name]: value,
    });
  };

  // const onUpdateHandler = () => {
  //   dispatch(putEmployee({ employee_id: employeeId, updateEmployeeValue }));
  // };

  useEffect(() => {
    dispatch(getEmployee(employeeId));
  }, [employeeId, dispatch]);

  return page ? (
    <AdminEmployeeDetailsPresenter
      employee={data}
      loading={loading}
      error={error}
      setPage={setPage}
    />
  ) : (
    <AdminUpdateEmployee
      setPage={setPage}
      // onUpdateHandler={onUpdateHandler}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default AdminEmployeeDetailsContainer;
