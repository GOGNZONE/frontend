import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../../Components';

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}></Route>
    </Routes>
  );
};

export default Admin;
