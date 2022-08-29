import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStock, putStock } from 'store/modules/stock/stockActions';
import AdminStorageInfoPresenter from './AdminStockInfoPresenter';
import AdminStockUpdate from './AdminStockUpdate';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function AdminStorageInfoContainer() {
  const { stockIdParams } = useParams();
  const [page, setPage] = useState(true);
  const [stock, setStock] = useState({
    stockName: '',
    stockQuantity: '',
    stockDescription: '',
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stock.stock);
  console.log(data);
  useEffect(() => {
    dispatch(getStock(stockIdParams));
  }, [stockIdParams, dispatch]);

  const changePageHandler = () => {
    setPage(!page);
  };

  return page ? (
    <AdminStorageInfoPresenter
      changePageHandler={changePageHandler}
      // componentDisabled={componentDisabled}
      // setComponentDisabled={setComponentDisabled}
      // onFormLayoutChange={onFormLayoutChange}
      // stockIdParams={stockIdParams}
      // onChange={onChange}
      // updateButton={updateButton}
      // onButtonNameChange={onButtonNameChange}
    />
  ) : (
    <AdminStockUpdate changePageHandler={changePageHandler} />
  );
}

export default AdminStorageInfoContainer;
