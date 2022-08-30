import React from 'react';
import Swal from 'sweetalert2';
import { Spin } from 'antd';

const Loading = ({ loading, error, data }) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!data) return null;
};

export default Loading;
