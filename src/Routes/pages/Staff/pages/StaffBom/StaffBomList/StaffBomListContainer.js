import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from 'routes/pages/Staff/pages/StaffBom/StaffBomList/StaffBomListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';

function StaffBomListContainer() {
  const bomList = useSelector((state) => state.bom.bomList.data);
  const dispatch = useDispatch();
  console.log(bomList);

  useEffect(() => {
    bomListApi();
  }, []);

  const bomListApi = async () => {
    const list = await api.getBomList();
    dispatch({ type: 'GET_BOM_LIST', payload: list });
  };

  return <div>{<StaffBomListPresenter bomList={bomList} />}</div>;
}

export default StaffBomListContainer;
