import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaffLayout } from '../../../Components';
import {
  StaffClienList,
  StaffDashBoard,
  StaffOrder,
  StaffProduction,
  StaffRelease,
} from './pages';
import { StaffOrderInfo, StaffOrderList } from './pages/StaffOrder';
import { StaffBomList, StaffBomRegist, StaffBomInfo } from './pages/StaffBom';
import {
  StaffStorageInfo,
  StaffStorageList,
  StaffStorageRegist,
} from './pages/StaffStorage';
import {
  StaffStockInfo,
  StaffStockRegist,
  StaffStockList,
} from './pages/StaffStock';

const Staff = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffLayout />}>
        <Route index element={<StaffDashBoard />} />
        <Route path="/client" element={<StaffClienList />} />
        <Route path="/production/list" element={<StaffProduction />} />
        <Route path="/stock/list" element={<StaffStockList />} />
        <Route path="/stock/list/:stockIdParams" element={<StaffStockInfo />} />
        <Route path="/stock" element={<StaffStockRegist />} />
        <Route path="/release/list" element={<StaffRelease />} />
        <Route path="/order/list" element={<StaffOrderList />} />
        <Route path="/order/list/:orderIdParams" element={<StaffOrderInfo />} />
        <Route path="/order/info" element={<StaffOrderInfo />} />
        <Route path="/bom" element={<StaffBomRegist />} />
        <Route path="/bom/list" element={<StaffBomList />} />
        <Route path="/bom/list/:bomIdParams" element={<StaffBomInfo />} />
        <Route path="/bom" element={<StaffBomRegist />} />
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
