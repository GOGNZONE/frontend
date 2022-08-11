import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Admin, SignIn, Staff } from './pages';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/staff/*" element={<Staff />} />
      <Route path="/admin/*" element={<Admin />} />
      {/* 404 Page */}
    </Routes>
  );
};

export default RootRoute;
