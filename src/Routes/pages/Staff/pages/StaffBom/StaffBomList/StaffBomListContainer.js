import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from './StaffBomListPresenter';
import { getBomList } from '../../../../../../Apis/bomApi';

function StaffBomListContainer() {
  const [bomList, setBomList] = useState([]);

  const getBomListApi = () => {
    getBomList().then((response) => setBomList(response.data));
  };

  useEffect(() => {
    getBomListApi();
  }, []);
  return <StaffBomListPresenter bomList={bomList} />;
}

export default StaffBomListContainer;
