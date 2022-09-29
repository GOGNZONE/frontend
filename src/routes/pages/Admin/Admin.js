import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'components';
import {
  AdminDashBoard,
  AdminEmployeeDetails,
  AdminEmployeeList,
  AdminRegisterEmployee,
  AdminRetiredEmployeeList,
  AdminRetiredEmployeeInfo,
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
  AdminProductionListCompleted,
  AdminReleaseRegistrationInProduction,
  AdminReleaseRegistration,
  AdminReleaseList,
  AdminReleaseDetails,
} from './pages';
import NotFound from '../NotFound';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Admin = ({ logout, authToken, expiredToken }) => {
  const tokenDecoded = jwtDecode(authToken);
  const navigate = useNavigate();

  const checkAdmin = () => {
    if (tokenDecoded.auth && tokenDecoded.auth !== 'ADMIN') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '접근 권한이 없습니다.',
        timer: 2000,
      });
      navigate('/staff');
    }
  };

  useEffect(() => {
    checkAdmin();
    expiredToken();
  }, []);
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<AdminLayout logout={logout} />}>
        <Route index element={<AdminDashBoard />} />
        {/* Stock */}
        <Route path="/stock/list" element={<AdminStockList />} />
        <Route path="/stock/list/:stockIdParams" element={<AdminStockInfo />} />
        <Route path="/stock" element={<AdminStockRegist />} />

        {/* Order */}
        <Route path="/order" element={<AdminOrderRegist />} />
        <Route path="/order/list" element={<AdminOrderList />} />
        <Route path="/order/list/:orderIdParams" element={<AdminOrderInfo />} />
        {/* BOM */}
        <Route path="/bom" element={<AdminBomRegist />} />
        <Route path="/bom/list" element={<AdminBomList />} />
        <Route path="/bom/list/:bomIdParams" element={<AdminBomInfo />} />

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
        <Route
          path="/retired-employee/:retiredEmployeeId"
          element={<AdminRetiredEmployeeInfo />}
        />
        {/* Client */}
        <Route path="/client/list" element={<AdminClientList />} />
        <Route path="/client" element={<AdminRegisterClient />} />
        <Route path="/client/:clientId" element={<AdminClientInfo />} />
        <Route
          path="/client/account/:clientId"
          element={<AdminRegisterClientAccount />}
        />
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
        <Route
          path="/production/list-completed"
          element={<AdminProductionListCompleted />}
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
