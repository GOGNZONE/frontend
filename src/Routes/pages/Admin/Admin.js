import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'Components';
import {
  AdminClientList,
  AdminDashBoard,
  AdminEmployeeDetails,
  AdminEmployeeList,
  AdminRegisterEmployee,
  AdminRetiredEmployeeList,
} from 'Routes/pages/Admin/pages';
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
      </Route>
    </Routes>
  );
};

export default Admin;
