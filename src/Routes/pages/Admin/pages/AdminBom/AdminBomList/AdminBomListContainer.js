import React, { useEffect, useState } from 'react';
import AdminBomListPresenter from './AdminBomListPresenter';
// import { getBomList } from '../../../../../../Apis/bomApi';
import { getBomList } from '../../../../../../Apis/index';
function AdminBomListContainer() {
  const [bomList, setBomList] = useState([]);
  const getBomListApi = () => {
    getBomList().then((response) => setBomList(response.data));
  };

  useEffect(() => {
    getBomListApi();
  }, []);
  return <AdminBomListPresenter bomList={bomList} />;
}

export default AdminBomListContainer;
