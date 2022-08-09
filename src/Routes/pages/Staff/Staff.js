import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from '../../../Components';
import {
  StaffClienList,
  StaffDashBoard,
  StaffOrder,
  StaffProduction,
  StaffRelease,
  StaffStock,
} from './pages';
import { StaffBomList, StaffBomRegist } from './pages/StaffBom';

const Staff = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffLayout />}>
        <Route index element={<StaffDashBoard />} />
        <Route path="/client" element={<StaffClienList />} />
        <Route path="/production/list" element={<StaffProduction />} />
        <Route path="/stock/list" element={<StaffStock />} />
        <Route path="/release/list" element={<StaffRelease />} />
        <Route path="/order/list" element={<StaffOrder />} />
        <Route path="/bom" element={<StaffBomRegist />} />
        <Route path="/bom/list" element={<StaffBomList />} />
      </Route>
    </Routes>
  );
};

export default Staff;
