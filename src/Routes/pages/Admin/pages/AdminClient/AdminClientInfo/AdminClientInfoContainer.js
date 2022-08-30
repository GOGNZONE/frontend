import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClient, updateClient } from 'store/modules/client/clientActions';
import { updateClientAccount } from 'store/modules/client/clientAccountActions';
import AdminClientInfoPresenter from './AdminClientInfoPresenter';
import AdminClientUpdate from './components/AdminClientUpdate';
import Swal from 'sweetalert2';
import AdminUpdateClientAccount from './components/AdminUpdateClientAccount';

const AdminClientInfoContainer = () => {
  const { data, loading, error } = useSelector((state) => state.client.client);
  const [page, setPage] = useState('info', 'updateInfo', 'updateAccount');
  const { clientId } = useParams();
  const dispatch = useDispatch();

  const [updateClientInfo, setUpdateClientInfo] = useState({
    clientName: '',
    clientTel: '',
    clientAddress: '',
    clientFile: '',
    clientManager: '',
  });

  const [updateClientAccountInfo, setUpdateClientAccountInfo] = useState({
    accountBank: '',
    accountNumber: '',
    accountDepositor: '',
  });

  const onClientInfoChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUpdateClientInfo({
        ...updateClientInfo,
        [name]: value,
      });
    },
    [updateClientInfo],
  );

  const onClientInfoUpdateHandler = async () => {
    const { clientName, clientTel, clientAddress, clientManger } =
      updateClientInfo;

    clientName !== '' &&
    clientTel !== '' &&
    clientAddress !== '' &&
    clientManger !== ''
      ? await (dispatch(
          updateClient({ client_id: clientId, updateClientInfo }),
        ),
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '수정완료',
          showConfirmButton: false,
          timer: 1500,
        }),
        window.location.reload())
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

  const onClientAccountChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUpdateClientAccountInfo({
        ...updateClientAccountInfo,
        [name]: value,
      });
    },
    [updateClientAccountInfo],
  );

  const onClientAccountUpdateHandler = async (accountId) => {
    const { accountBank, accountNumber, accountDepositor } =
      updateClientAccountInfo;

    accountBank !== '' && accountNumber !== '' && accountDepositor !== ''
      ? await dispatch(
          updateClientAccount({
            account_id: accountId,
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
      />
    );

  if (data && page === 'updateInfo')
    return (
      <AdminClientUpdate
        clientInfo={data}
        loading={loading}
        error={error}
        setPage={setPage}
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
        onClientAccountChangeHandler={onClientAccountChangeHandler}
        onClientAccountUpdateHandler={onClientAccountUpdateHandler}
        onClientAccountResetHandler={onClientAccountResetHandler}
      />
    );
};

export default AdminClientInfoContainer;
