import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClient } from 'store/modules/client/clientActions';
import StaffClientInfoPresenter from './StaffClientInfoPresenter';

const StaffClientInfoContainer = () => {
  const { data, loading, error } = useSelector((state) => state.client.client);
  const { clientId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient(clientId));
  }, [clientId, dispatch]);

  return (
    <StaffClientInfoPresenter
      clientInfo={data}
      loading={loading}
      error={error}
    />
  );
};

export default StaffClientInfoContainer;
