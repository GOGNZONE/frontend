import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from './StaffStockInfoPresenter';
import { getStock } from '../../../../../../Apis/api/stockApi';

function StaffStorageInfoContainer() {
  const { stockIdParams } = useParams();
  const [stock, setStock] = useState([]);

  const getStockApi = (stockIdParams) => {
    getStock(stockIdParams).then((response) => {
      setStock(response.data);
    });
  };
  useEffect(() => {
    getStockApi(stockIdParams);
  }, []);

  return <StaffStorageInfoPresenter stock={stock} />;
}

export default StaffStorageInfoContainer;
