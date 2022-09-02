import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'components';
import {
  AdminDashBoard,
  AdminEmployeeDetails,
  AdminEmployeeList,
  AdminRegisterEmployee,
  AdminRetiredEmployeeList,
  AdminClientList,
  AdminClientInfo,
  AdminRegisterClient,
  AdminRegisterClientAccount,
  AdminOrderInfo,
  AdminOrderList,
  AdminOrderRegist,
  AdminBomList,
  AdminBomRegist,
  AdminBomInfo,
  AdminStorageInfo,
  AdminStorageList,
  AdminStorageRegist,
  AdminStockInfo,
  AdminStockRegist,
  AdminStockList,
  AdminProductionRegistration,
  AdminProductionList,
  AdminProductionDetails,
  AdminReleaseRegistrationInProduction,
  AdminReleaseRegistration,
  AdminReleaseList,
  AdminReleaseDetails,
} from './pages';

const Admin = ({ checkAdmin, logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout checkAdmin={checkAdmin} logout={logout} />}
      >
        <Route index element={<AdminDashBoard />} />
        {/* Employee */}
        <Route path="/employee/list" element={<AdminEmployeeList />} />
        <Route
          path="/employee/:employeeId"
          element={<AdminEmployeeDetails />}
        />
        <Route path="/employee" element={<AdminRegisterEmployee />} />
        <Route
          path="/retired-employee/list"
          element={<AdminRetiredEmployeeList />}
        />
        {/* Client */}
        <Route path="/client/list" element={<AdminClientList />} />
        <Route path="/client" element={<AdminRegisterClient />} />
        <Route path="/client/:clientId" element={<AdminClientInfo />} />
        <Route
          path="/client/account/:clientId"
          element={<AdminRegisterClientAccount />}
        />
        {/* Stock */}
        <Route path="/stock/list" element={<AdminStockList />} />
        <Route path="/stock/list/:stockIdParams" element={<AdminStockInfo />} />
        <Route path="/stock" element={<AdminStockRegist />} />
        {/* Order */}
        <Route path="/order" element={<AdminOrderRegist />} />
        <Route path="/order/list" element={<AdminOrderList />} />
        <Route path="/order/list/:orderIdParams" element={<AdminOrderInfo />} />
        <Route path="/order/info" element={<AdminOrderInfo />} />
        {/* BOM */}
        <Route path="/bom" element={<AdminBomRegist />} />
        <Route path="/bom/list" element={<AdminBomList />} />
        <Route path="/bom/list/:bomIdParams" element={<AdminBomInfo />} />
        <Route path="/bom" element={<AdminBomRegist />} />
        {/* Storage */}
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
