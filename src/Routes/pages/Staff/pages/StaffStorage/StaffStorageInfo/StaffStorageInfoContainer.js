import React, { useEffect } from 'react';
import StaffStorageInfoPresenter from './StaffStorageInfoPresenter';
import axios from 'axios';
function StaffStorageInfoContainer() {
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/storage/${number}`);
  // });
  console.log(test);
  return <StaffStorageInfoPresenter />;
}

export default StaffStorageInfoContainer;
