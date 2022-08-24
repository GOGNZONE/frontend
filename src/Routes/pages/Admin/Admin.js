import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'Components';
import {
  AdminDashBoard,
  AdminEmployeeDetails,
  AdminEmployeeList,
} from './pages';

const Admin = ({ checkAdmin, logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout checkAdmin={checkAdmin} logout={logout} />}
      >
        <Route index element={<AdminDashBoard />} />
        <Route path="employee/list" element={<AdminEmployeeList />} />
        <Route path="employee/:employeeId" element={<AdminEmployeeDetails />} />
      </Route>
    </Routes>
  );
};

export default Admin;
