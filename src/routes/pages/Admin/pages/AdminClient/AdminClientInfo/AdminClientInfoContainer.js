import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClient, updateClient } from 'store/modules/client/clientActions';
import AdminClientInfoPresenter from './AdminClientInfoPresenter';
import AdminClientUpdate from './components/AdminClientUpdate';
import Swal from 'sweetalert2';
import AdminUpdateClientAccount from './components/AdminUpdateClientAccount';
import AdminRegisterClientAccount from '../AdminRegisterClientAccount';
import { updateClientAccount } from 'store/modules/client/clientAccountActions';

const AdminClientInfoContainer = () => {
  const { data, loading, error } = useSelector((state) => state.client.client);
  const [page, setPage] = useState(
    'info',
    'updateInfo',
    'updateAccount',
    'registerAccount',
  );
  const { clientId } = useParams();
  const dispatch = useDispatch();

  const [updateClientInfo, setUpdateClientInfo] = useState({});
  const [updateClientAccountInfo, setUpdateClientAccountInfo] = useState({});

  const onChangeClientInfo = (value) => {
    setUpdateClientInfo(value);
  };

  const onChangeClientAccountInfo = (value) => {
    setUpdateClientAccountInfo(value);
  };

  const setChangeClientInfo = (data) => {
    setUpdateClientInfo(data);
  };

  const setChangeClinetAccountInfo = (data) => {
    setUpdateClientAccountInfo(data);
  };

  const onClientInfoChangeHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeClientInfo({
        ...updateClientInfo,
        [name]: value,
      });
    },
    [updateClientInfo],
  );

  const onClientAccountChangeHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeClientAccountInfo({
        ...updateClientAccountInfo,
        [name]: value,
      });
    },
    [updateClientAccountInfo],
  );

  const onClientInfoUpdateHandler = async () => {
    const { clientName, clientTel, clientAddress, clientManger } =
      updateClientInfo;

    clientName !== '' &&
    clientTel !== '' &&
    clientAddress !== '' &&
    clientManger !== ''
      ? await dispatch(
          updateClient({ client_id: clientId, updateClientInfo }),
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '수정완료',
            showConfirmButton: false,
            timer: 1500,
          }),
          window.location.reload(),
        )
      : Swal.fire({
          position: 'center',
          icon: 'error',
          title: '필수값을 입력해주세요',
          showConfirmButton: false,
          timer: 1500,
        });
  };

  const onClientInfoResetHandler = () => {
    setUpdateClientInfo({
      clientName: '',
      clientTel: '',
      clientAddress: '',
      clientFile: '',
      clientManager: '',
    });
  };

  const onClientAccountUpdateHandler = async () => {
    updateClientAccountInfo.accountBank !== '' &&
    updateClientAccountInfo.accountNumber !== '' &&
    updateClientAccountInfo.accountDepositor !== ''
      ? await dispatch(
          updateClientAccount({
            account_id: updateClientAccountInfo.accountId,
            updateClientAccountInfo,
          }),
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '수정완료',
            showConfirmButton: false,
            timer: 1500,
          }),
          window.location.reload(),
        )
      : Swal.fire({
          position: 'center',
          icon: 'error',
          title: '필수값을 입력해주세요',
          showConfirmButton: false,
          timer: 1500,
        });
  };

  const onClientAccountResetHandler = () => {
    setUpdateClientInfo({
      accountBank: '',
      accountNumber: '',
      accountDepositor: '',
    });
  };

  useEffect(() => {
    dispatch(getClient(clientId));
  }, [clientId, dispatch]);

  if (data && page === 'info')
    return (
      <AdminClientInfoPresenter
        clientInfo={data}
        loading={loading}
        error={error}
        setPage={setPage}
        setChangeClientInfo={setChangeClientInfo}
        setChangeClinetAccountInfo={setChangeClinetAccountInfo}
      />
    );

  if (data && page === 'updateInfo')
    return (
      <AdminClientUpdate
        clientInfo={data}
        loading={loading}
        error={error}
        setPage={setPage}
        onChangeClientInfo={onChangeClientInfo}
        onClientInfoChangeHandler={onClientInfoChangeHandler}
        onClientInfoUpdateHandler={onClientInfoUpdateHandler}
        onClientInfoResetHandler={onClientInfoResetHandler}
      />
    );
  if (data && page === 'updateAccount')
    return (
      <AdminUpdateClientAccount
        clientInfo={data}
        loading={loading}
        error={error}
        setPage={setPage}
        onChangeClientAccountInfo={onChangeClientAccountInfo}
        onClientAccountChangeHandler={onClientAccountChangeHandler}
        onClientAccountUpdateHandler={onClientAccountUpdateHandler}
        onClientAccountResetHandler={onClientAccountResetHandler}
      />
    );
  if (data && page === 'registerAccount')
    return (
      <AdminRegisterClientAccount
        clientInfo={data}
        loading={loading}
        error={error}
        setPage={setPage}
      />
    );
};

export default AdminClientInfoContainer;
