import React, { useEffect, useState } from 'react';
import StaffStorageListPresenter from './StaffStorageListPresenter';

import axios from 'axios';

function StaffStorageListContainer() {
  const [storageList, setStorageList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/storage/list')
      .then((reponse) => setStorageList(reponse.data));
  }, []);
  return <StaffStorageListPresenter storageList={storageList} />;
}

export default StaffStorageListContainer;
