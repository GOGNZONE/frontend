import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientList } from 'store/modules/client/clientActions';
import AdminClientListPresenter from './AdminClientListPresenter';

const AdminClientListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.client.clientList,
  );
  const dispatch = useDispatch();

  console.log(data);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  return <AdminClientListPresenter />;
};

export default AdminClientListContainer;
