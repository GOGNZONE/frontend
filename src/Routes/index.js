import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, Staff } from './pages';

/**
 * @title RootRoute
 * @description Main Router
 */
const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/staff/*" element={<Staff />} />
    </Routes>
  );
};

export default RootRoute;
