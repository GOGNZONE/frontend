import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Admin, SignIn, Staff, NotFound } from 'routes/pages';

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

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<SignIn authToken={authToken} />} />
      <Route path="/staff/*" element={<Staff logout={logout} />} />
      <Route
        path="/admin/*"
        element={<Admin logout={logout} authToken={authToken} />}
      />
    </Routes>
  );
};

export default RootRoute;
