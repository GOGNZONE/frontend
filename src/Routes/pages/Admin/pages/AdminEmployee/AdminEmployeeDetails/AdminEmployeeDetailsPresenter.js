import React from 'react';
import Swal from 'sweetalert2';
import { Spin } from 'antd';

const AdminEmployeeDetailsPresenter = ({ employee, loading, error }) => {
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!employee) return null;
  return (
    <div>
      <Spin spinning={loading} size="large" />
      AdminEmployeeDetailsPresenter
    </div>
  );
};

export default AdminEmployeeDetailsPresenter;
