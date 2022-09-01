import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getStock,
  putStock,
  deleteStock,
} from 'store/modules/stock/stockActions';
import { getStorageList } from 'store/modules/storage/storageActions';
import AdminStorageInfoPresenter from './AdminStockInfoPresenter';
import AdminStockUpdate from './AdminStockUpdate';
import { useDispatch, useSelector } from 'react-redux';

function AdminStorageInfoContainer() {
  const { stockIdParams } = useParams();
  const [page, setPage] = useState(true);
  const [stock, setStock] = useState({});
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stock.stock);
  const storageList = useSelector((state) => state.storage.storageList.data);
  const navigate = useNavigate();
  console.log(stock);

  useEffect(() => {
    dispatch(getStock(stockIdParams));
    dispatch(getStorageList());
  }, [stockIdParams, dispatch]);

  const dataInsert = () => {
    setStock({
      stockId: data.stockId,
      stockName: data.stockName,
      stockQuantity: data.stockQuantity,
      stockDescription: data.stockDescription,
      storage: data.storage,
    });
  };

  const updateStock = () => {
    dispatch(putStock({ stockIdParams, stock }));
    changePageHandler();
    window.location.reload();
  };

  const changePageHandler = () => {
    setPage(!page);
  };

  const onChange = (value) => {
    setStock(value);
  };

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...stock,
      [name]: value,
    });
  });

  const storageInputHandler = useCallback((name, e) => {
    onChange({
      ...stock,
      storage: {
        [name]: e,
      },
    });
  });
  const onDeleteHandler = (stockId) => {
    dispatch(deleteStock(stockId));
    navigate('/admin/stock/list');
    window.location.reload();
  };

  return page ? (
    <AdminStorageInfoPresenter
      changePageHandler={changePageHandler}
      data={data}
      onDeleteHandler={onDeleteHandler}
    />
  ) : (
    <AdminStockUpdate
      data={data}
      storageList={storageList}
      changePageHandler={changePageHandler}
      onChangeInputHandler={onChangeInputHandler}
      storageInputHandler={storageInputHandler}
      updateStock={updateStock}
      dataInsert={dataInsert}
    />
  );
}

export default AdminStorageInfoContainer;
