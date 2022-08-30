import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientList } from 'store/modules/client/clientActions';
import AdminClientListPresenter from './AdminClientListPresenter';

const AdminClientListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.client.clientList,
  );

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  return (
    <AdminClientListPresenter
      clientList={data}
      loading={loading}
      error={error}
    />
  );
};

export default AdminClientListContainer;
