import React, { useEffect, useState } from 'react';
import AdminBomListPresenter from './AdminBomListPresenter';

import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';

function AdminBomListContainer() {
  const bomList = useSelector((state) => state.bom.bomList.data);
  const dispatch = useDispatch();
  useEffect(() => {
    bomListApi();
  }, []);

  const bomListApi = async () => {
    const list = await api.getBomList();
    dispatch({ type: 'GET_BOM_LIST', payload: list });
  };
  return <AdminBomListPresenter bomList={bomList} />;
}

export default AdminBomListContainer;
