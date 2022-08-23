import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../../Components';

const Admin = ({ checkAdmin, logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout checkAdmin={checkAdmin} logout={logout} />}
      ></Route>
    </Routes>
  );
};

export default Admin;
