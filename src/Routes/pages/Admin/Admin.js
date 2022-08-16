import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../../Components';
import {
  AdminProductionDetails,
  AdminProductionList,
  AdminProductionRegistration,
  AdminReleaseList,
  AdminReleaseDetails,
  AdminReleaseRegistration,
} from './pages';

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* production */}
        <Route path="/production" element={<AdminProductionRegistration />} />
        <Route path="/production/list" element={<AdminProductionList />} />
        <Route
          path="/production/:productionIdParams"
          element={<AdminProductionDetails />}
        />
        {/* release */}
        <Route
          path="/release/:productionIdParams"
          element={<AdminReleaseRegistration />}
        />
        <Route path="/release/list" element={<AdminReleaseList />} />
        <Route
          path="/release/:releaseIdParams"
          element={<AdminReleaseDetails />}
        />
      </Route>
    </Routes>
  );
};

export default Admin;
