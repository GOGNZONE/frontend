import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Admin, SignIn, Staff, NotFound } from 'routes/pages';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('ACCESS_TOKEN');

  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    navigate('/');
  };

  const expiredToken = () => {
    const decodedeToken = jwt_decode(authToken);
    const { exp } = decodedeToken;
    const now = new Date();
    const nowTime = now.getTime();
    if (nowTime < exp) {
      logout();
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '로그인이 만료되었습니다',
        timer: 2000,
      });
    }
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<SignIn authToken={authToken} />} />
      <Route
        path="/staff/*"
        element={<Staff logout={logout} expiredToken={expiredToken} />}
      />
      <Route
        path="/admin/*"
        element={
          <Admin
            logout={logout}
            authToken={authToken}
            expiredToken={expiredToken}
          />
        }
      />
    </Routes>
  );
};

export default RootRoute;
