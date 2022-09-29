import React, { useState, useEffect } from 'react';
import StaffBomInfoPresenter from './StaffBomInfoPresenter';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBom } from 'store/modules/bom/bomActions';
import moment from 'moment';

function StaffBomInfoContainer() {
  const { bomIdParams } = useParams();
  const { data, loading, error } = useSelector((state) => state.bom.bom);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBom(bomIdParams));
  }, [bomIdParams, dispatch]);

  return <StaffBomInfoPresenter data={data} />;
}

export default StaffBomInfoContainer;
