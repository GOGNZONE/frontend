import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from '../../../Components';
import {
  StaffClienList,
  StaffDashBoard,
  StaffOrder,
  StaffRelease,
  StaffStock,
} from './pages';
import { StaffBomList, StaffBomRegist } from './pages/StaffBom';
import {
  StaffProductionList,
  StaffProductionRegistration,
  StaffProductionDetails,
} from './pages/StaffProduction';

const Staff = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffLayout />}>
        <Route index element={<StaffDashBoard />} />
        <Route path="/client" element={<StaffClienList />} />

        {/* production */}
        <Route path="/production" element={<StaffProductionRegistration />} />
        <Route path="/production/list" element={<StaffProductionList />} />
        <Route
          path="/production/:productionIdParams"
          element={<StaffProductionDetails />}
        />

        <Route path="/stock/list" element={<StaffStock />} />

        {/* release */}
        <Route path="/release/list" element={<StaffRelease />} />

        <Route path="/order/list" element={<StaffOrder />} />
        <Route path="/bom" element={<StaffBomRegist />} />
        <Route path="/bom/list" element={<StaffBomList />} />
      </Route>
    </Routes>
  );
};

export default Staff;
