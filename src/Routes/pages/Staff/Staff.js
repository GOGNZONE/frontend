import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from '../../../Components';
import {
  StaffClienList,
  StaffDashBoard,
  StaffMypage,
  StaffOrder,
  StaffStock,
} from './pages';
import { StaffBomList, StaffBomRegist } from './pages/StaffBom';
import {
  StaffProductionList,
  StaffProductionRegistration,
  StaffProductionDetails,
} from './pages/StaffProduction';
import { StaffReleaseList, StaffReleaseDetails } from './pages/StaffRelease';

const Staff = ({ logout }) => {
  return (
    <Routes>
      <Route path="/" element={<StaffLayout logout={logout} />}>
        <Route index element={<StaffMypage />} />
        <Route path="/dashboard" element={<StaffDashBoard />} />
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
        <Route path="/release/list" element={<StaffReleaseList />} />
        <Route
          path="/release/:releaseIdParams"
          element={<StaffReleaseDetails />}
        />

        <Route path="/order/list" element={<StaffOrder />} />
        <Route path="/bom" element={<StaffBomRegist />} />
        <Route path="/bom/list" element={<StaffBomList />} />
      </Route>
    </Routes>
  );
};

export default Staff;
