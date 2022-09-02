import React, { useEffect, useState } from 'react';
import AdminBomListPresenter from './AdminBomListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getBomList, deleteBom } from 'store/modules/bom/bomActions';

function AdminBomListContainer() {
  const { data, loading, error } = useSelector((state) => state.bom.bomList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBomList());
  }, [dispatch]);

  const onDeleteHandler = (bomId) => {
    dispatch(deleteBom(bomId));
    window.location.reload();
  };
  return (
    <AdminBomListPresenter bomList={data} onDeleteHandler={onDeleteHandler} />
  );
}

export default AdminBomListContainer;
