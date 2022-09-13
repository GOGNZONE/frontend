import { message } from 'antd';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { registerClientAccount } from 'store/modules/client/clientAccountActions';
import AdminRegisterClientAccountPresenter from './AdminRegisterClientAccountPresenter';

const AdminRegisterClientAccountContainer = ({ setPage }) => {
  const { clientId } = useParams();
  const [accountInfo, setAccountInfo] = useState({
    accountBank: '',
    accountNumber: '',
    accountDepositor: '',
  });
  const dispatch = useDispatch();

  const saveAccount = async () => {
    if (accountInfo) {
      await dispatch(
        registerClientAccount({ clientId: clientId, accountInfo }),
      );
      setPage('info');
    } else {
      message.error('필수값을 입력하세요');
    }
  };

  const onChangeHandler = (value) => {
    setAccountInfo(value);
  };

  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...accountInfo,
        [name]: value,
      });
    },
    [accountInfo],
  );

  const onResetHandler = useCallback(() => {
    onChangeHandler({
      accountBank: '',
      accountNumber: '',
      accountDepositor: '',
    });
    setPage('info');
  }, [setPage]);

  return (
    <AdminRegisterClientAccountPresenter
      accountInfo={accountInfo}
      saveAccount={saveAccount}
      onChangeInputHandler={onChangeInputHandler}
      onResetHandler={onResetHandler}
    />
  );
};

export default AdminRegisterClientAccountContainer;
