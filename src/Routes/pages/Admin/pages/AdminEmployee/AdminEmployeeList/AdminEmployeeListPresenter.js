import { Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminEmployeeListPresenter = ({
  employeeList,
  loading,
  error,
  onDeleteHandler,
}) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!employeeList) return null;
  return (
    <>
      <ul>
        {employeeList.map((employee) => (
          <li key={employee.employeeId}>
            <Link to={`/admin/employee/${employee.employeeId}`}>
              {employee.employeeName}
            </Link>
            <button
              type="button"
              onClick={() => onDeleteHandler(employee.employeeId)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminEmployeeListPresenter;
