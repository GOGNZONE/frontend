import { Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminEmployeeListPresenter = ({ employeeList, loading, error }) => {
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!employeeList) return null;
  return (
    <>
      <Spin spinning={loading} size="large" />
      <ul>
        {employeeList.map((employee) => (
          <li key={employee.employeeId}>
            <Link to={`/admin/employee/${employee.employeeId}`}>
              {employee.employeeName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminEmployeeListPresenter;
