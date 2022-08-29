import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'Components';
import { AdminDashBoard } from 'Routes/pages/Admin/pages';
import {
  AdminOrderInfo,
  AdminOrderList,
  AdminOrderRegist,
} from 'Routes/pages/Admin/pages/AdminOrder';
import {
  AdminBomList,
  AdminBomRegist,
  AdminBomInfo,
} from 'Routes/pages/Admin/pages/AdminBom';
import {
  AdminStorageInfo,
  AdminStorageList,
  AdminStorageRegist,
} from 'Routes/pages/Admin/pages/AdminStorage';
import {
  AdminStockInfo,
  AdminStockRegist,
  AdminStockList,
} from 'Routes/pages/Admin/pages/AdminStock';
import {
  AdminProductionList,
  AdminProductionDetails,
  AdminProductionRegistration,
} from 'Routes/pages/Admin/pages/AdminProduction';
import {
  AdminReleaseList,
  AdminReleaseDetails,
  AdminReleaseRegistration,
  AdminReleaseRegistrationInProduction,
} from 'Routes/pages/Admin/pages/AdminRelease';
const Admin = ({ checkAdmin, logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout checkAdmin={checkAdmin} logout={logout} />}
      >
        <Route index element={<AdminDashBoard />} />
        <Route path="/stock/list" element={<AdminStockList />} />
        <Route path="/stock/list/:stockIdParams" element={<AdminStockInfo />} />
        <Route path="/stock" element={<AdminStockRegist />} />
        <Route path="/order" element={<AdminOrderRegist />} />
        <Route path="/order/list" element={<AdminOrderList />} />
        <Route path="/order/list/:orderIdParams" element={<AdminOrderInfo />} />
        <Route path="/order/info" element={<AdminOrderInfo />} />
        <Route path="/bom" element={<AdminBomRegist />} />
        <Route path="/bom/list" element={<AdminBomList />} />
        <Route path="/bom/list/:bomIdParams" element={<AdminBomInfo />} />
        <Route path="/bom" element={<AdminBomRegist />} />
        <Route path="/storage/list" element={<AdminStorageList />} />
        <Route
          path="/storage/list/:storageIdParams"
          element={<AdminStorageInfo />}
        />
        <Route path="/storage" element={<AdminStorageRegist />} />
        {/* production */}
        <Route path="/production" element={<AdminProductionRegistration />} />
        <Route path="/production/list" element={<AdminProductionList />} />
        <Route
          path="/production/:productionIdParams"
          element={<AdminProductionDetails />}
        />
        {/* release */}
        <Route
          path="/production/release/:productionIdParams"
          element={<AdminReleaseRegistrationInProduction />}
        />
        <Route path="/release" element={<AdminReleaseRegistration />} />
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
