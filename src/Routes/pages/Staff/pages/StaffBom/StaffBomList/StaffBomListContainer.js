import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from './StaffBomListPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getBomList, deleteBom } from 'store/modules/bom/bomActions';

function StaffBomListContainer() {
  const { data, loading, error } = useSelector((state) => state.bom.bomList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBomList());
  }, [dispatch]);

  return <StaffBomListPresenter bomList={data} />;
}

export default StaffBomListContainer;
