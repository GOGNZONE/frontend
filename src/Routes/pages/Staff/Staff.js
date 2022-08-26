import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from 'Components';
import { StaffDashBoard, StaffMypage } from 'Routes/pages/Staff/pages';
import {
  StaffOrderInfo,
  StaffOrderList,
} from 'Routes/pages/Staff/pages/StaffOrder';
import {
  StaffBomList,
  StaffBomRegist,
  StaffBomInfo,
} from 'Routes/pages/Staff/pages/StaffBom';
import {
  StaffStorageInfo,
  StaffStorageList,
  StaffStorageRegist,
} from 'Routes/pages/Staff/pages/StaffStorage';
import {
  StaffStockInfo,
  StaffStockRegist,
  StaffStockList,
} from 'Routes/pages/Staff/pages/StaffStock';

import {
  StaffProductionList,
  StaffProductionRegistration,
  StaffProductionDetails,
} from 'Routes/pages/Staff/pages/StaffProduction';
import {
  StaffReleaseList,
  StaffReleaseDetails,
} from 'Routes/pages/Staff/pages/StaffRelease';

const Staff = ({ logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<StaffLayout checkAdmin={checkAdmin} logout={logout} />}
      >
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

        {/* release */}
        {/* <Route path="/release/list" element={<StaffReleaseList />} />
        <Route
          path="/release/:releaseIdParams"
          element={<StaffReleaseDetails />}
        /> */}
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
