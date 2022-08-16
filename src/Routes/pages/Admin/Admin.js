import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../../Components';
import { AdminDashBoard } from './pages';
import {
  AdminOrderInfo,
  AdminOrderList,
  AdminOrderRegist,
} from './pages/AdminOrder';
import { AdminBomList, AdminBomRegist, AdminBomInfo } from './pages/AdminBom';
import {
  AdminStorageInfo,
  AdminStorageList,
  AdminStorageRegist,
} from './pages/AdminStorage';
import {
  AdminStockInfo,
  AdminStockRegist,
  AdminStockList,
} from './pages/AdminStock';
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
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
        {/* <Route path="/storage/list" element={<AdminStorageList/>}/> */}

        <Route
          path="/storage/list/:storageIdParams"
          element={<AdminStorageInfo />}
        />
        <Route path="/storage" element={<AdminStorageRegist />} />
      </Route>
    </Routes>
  );
};

export default Admin;
