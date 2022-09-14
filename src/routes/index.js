import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Admin, SignIn, Staff, NotFound } from 'routes/pages';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('ACCESS_TOKEN');

  const checkAdmin = () => {
    if (
      localStorage.getItem('AUTH') &&
      localStorage.getItem('AUTH') !== 'ADMIN'
    ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '접근 권한이 없습니다.',
        timer: 2000,
      });
      localStorage.removeItem('AUTH');
      setTimeout(() => {
        navigate('/');
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    navigate('/');
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<SignIn authToken={authToken} />} />
      <Route path="/staff/*" element={<Staff logout={logout} />} />
      <Route
        path="/admin/*"
        element={<Admin checkAdmin={checkAdmin} logout={logout} />}
      />
    </Routes>
  );
};

export default RootRoute;
