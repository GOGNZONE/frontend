import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from 'components';
import {
  StaffMypage,
  StaffDashBoard,
  StaffOrderInfo,
  StaffOrderList,
  StaffBomList,
  StaffBomRegist,
  StaffBomInfo,
  StaffStorageInfo,
  StaffStorageList,
  StaffStorageRegist,
  StaffStockInfo,
  StaffStockRegist,
  StaffStockList,
  StaffProductionList,
  StaffProductionRegistration,
  StaffProductionDetails,
  StaffClientList,
  StaffClientInfo,
  StaffReleaseList,
  StaffReleaseDetails,
} from './pages';

const Staff = ({ logout, checkAdmin }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<StaffLayout checkAdmin={checkAdmin} logout={logout} />}
      >
        <Route index element={<StaffMypage />} />
        <Route path="/dashboard" element={<StaffDashBoard />} />
        {/* Client */}
        <Route path="/client/list" element={<StaffClientList />} />
        <Route path="/client/:clientId" element={<StaffClientInfo />} />
        {/* production */}
        <Route path="/production" element={<StaffProductionRegistration />} />
        <Route path="/production/list" element={<StaffProductionList />} />
        <Route
          path="/production/:productionIdParams"
          element={<StaffProductionDetails />}
        />
        {/* release */}
        <Route path="/release/list" element={<StaffReleaseList />} />
        <Route
          path="/release/:releaseIdParams"
          element={<StaffReleaseDetails />}
        />
        {/* stock */}
        <Route path="/stock/list" element={<StaffStockList />} />
        <Route path="/stock/list/:stockIdParams" element={<StaffStockInfo />} />
        <Route path="/stock" element={<StaffStockRegist />} />
        {/* order */}
        <Route path="/order/list" element={<StaffOrderList />} />
        <Route path="/order/list/:orderIdParams" element={<StaffOrderInfo />} />
        {/* bom */}
        <Route path="/bom" element={<StaffBomRegist />} />
        <Route path="/bom/list" element={<StaffBomList />} />
        <Route path="/bom/list/:bomIdParams" element={<StaffBomInfo />} />
        <Route path="/bom" element={<StaffBomRegist />} />
        {/* storage */}
        <Route path="/storage/list" element={<StaffStorageList />} />
        <Route
          path="/storage/list/:storageIdParams"
          element={<StaffStorageInfo />}
        />
        <Route path="/storage" element={<StaffStorageRegist />} />
      </Route>
    </Routes>
  );
};

export default Staff;
