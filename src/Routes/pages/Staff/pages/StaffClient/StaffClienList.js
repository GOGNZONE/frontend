import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientList } from '../../../../../modules/client';

const StaffClienList = () => {
  const { data, loading, error } = useSelector(
    (state) => state.client.clientList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  console.log(data);
  console.log(loading);
  console.log(error);
  return <div>StaffClienList</div>;
};

export default React.memo(StaffClienList);
