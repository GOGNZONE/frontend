import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClient, updateClient } from 'store/modules/client/clientActions';
import AdminClientInfoPresenter from './AdminClientInfoPresenter';
import AdminClientUpdate from '../components/AdminClientUpdate';
import Swal from 'sweetalert2';

const AdminClientInfoContainer = () => {
  const { data, loading, error } = useSelector((state) => state.client.client);
  const [page, setPage] = useState(true);
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const [updateClientInfo, setUpdateClientInfo] = useState({
    clientName: '',
    clientTel: '',
    clientAddress: '',
    clientFile: '',
    clientManager: '',
  });

  const onChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setUpdateClientInfo({
      ...updateClientInfo,
      [name]: value,
    });
  });

  const onUpdateHandler = () => {
    dispatch(updateClient({ client_id: clientId, updateClientInfo }));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '수정완료',
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  const onResetHandler = () => {
    setUpdateClientInfo({
      clientName: '',
      clientTel: '',
      clientAddress: '',
      clientFile: '',
      clientManager: '',
    });
  };

  useEffect(() => {
    dispatch(getClient(clientId));
  }, [clientId, dispatch]);

  return page ? (
    <AdminClientInfoPresenter
      clientInfo={data}
      loading={loading}
      error={error}
      setPage={setPage}
    />
  ) : (
    <AdminClientUpdate
      clientInfo={data}
      loading={loading}
      error={error}
      setPage={setPage}
      onChangeHandler={onChangeHandler}
      onUpdateHandler={onUpdateHandler}
      onResetHandler={onResetHandler}
    />
  );
};

export default AdminClientInfoContainer;
