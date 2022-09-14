import React from 'react';
import Swal from 'sweetalert2';
import { Spin } from 'antd';

const Loading = ({ loading, error }) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
};

export default Loading;
