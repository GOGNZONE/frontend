import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Admin, SignIn, Staff } from 'Routes/pages';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  const navigate = useNavigate();
  const expirse = localStorage.getItem('EXPIRSE');

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
      localStorage.removeItem('ACCESS_TOKEN');
      setTimeout(() => {
        navigate('/');
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('AUTH');
    localStorage.removeItem('EXPIRSE');
    navigate('/');
  };

  useEffect(() => {
    if (Date.now() > expirse) {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/staff/*" element={<Staff logout={logout} />} />
      <Route
        path="/admin/*"
        element={<Admin checkAdmin={checkAdmin} logout={logout} />}
      />
      {/* 404 Page */}
    </Routes>
  );
};

export default RootRoute;
