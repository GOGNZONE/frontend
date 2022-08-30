import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteClient,
  getClientList,
} from 'store/modules/client/clientActions';
import AdminClientListPresenter from './AdminClientListPresenter';

const AdminClientListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.client.clientList,
  );

  const onDeleteHandler = async (clientId) => {
    await dispatch(deleteClient(clientId));
    dispatch(getClientList());
  };

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  return (
    data && (
      <AdminClientListPresenter
        clientList={data}
        onDeleteHandler={onDeleteHandler}
        loading={loading}
        error={error}
      />
    )
  );
};

export default AdminClientListContainer;
