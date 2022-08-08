import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from '../../../Components';
import {
  StaffClient,
  StaffDashBoard,
  StaffOrder,
  StaffProduction,
  StaffRelease,
  StaffStock,
} from './pages';

const Staff = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffLayout />}>
        <Route index element={<StaffDashBoard />} />
        <Route path="/client" element={<StaffClient />} />
        <Route path="/production" element={<StaffProduction />} />
        <Route path="/stock" element={<StaffStock />} />
        <Route path="/release" element={<StaffRelease />} />
        <Route path="/order" element={<StaffOrder />} />
      </Route>
    </Routes>
  );
};

export default Staff;
