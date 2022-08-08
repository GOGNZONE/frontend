import React from 'react';
import { Outlet } from 'react-router-dom';

const StaffLayout = () => {
  return (
    <div>
      <h1>StaffLayout</h1>
      <Outlet />
    </div>
  );
};

export default StaffLayout;
