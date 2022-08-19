import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Admin, SignIn, Staff } from './pages';
import api from '../apis';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  const [admin, setAdmin] = useState();
  console.log(localStorage.getItem('ACCESS_TOKEN'));
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
