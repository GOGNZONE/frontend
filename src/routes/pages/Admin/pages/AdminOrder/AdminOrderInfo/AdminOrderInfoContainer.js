import React, { useCallback, useState, useEffect } from 'react';
import AdminOrderInfoPresenter from './AdminOrderInfoPresenter';
import AdminOrderUpdate from './AdminOrderUpdate';
import {
  getOrder,
  deleteOrder,
  putOrder,
} from 'store/modules/order/orderActions';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getClientList } from 'store/modules/client/clientActions';
import { message } from 'antd';

function AdminOrderInfoContainer() {
  const { orderIdParams } = useParams();
  const [order, setOrder] = useState({});
  const [page, setPage] = useState(true);
  const dispatch = useDispatch();
  const changePageHandler = () => {
    setPage(!page);
  };
  const { data, loading, error } = useSelector((state) => state.order.order);
  const clientList = useSelector((state) => state.client.clientList.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrder(orderIdParams));
    dispatch(getClientList());
  }, [orderIdParams, dispatch]);

  const onChange = (value) => {
    setOrder(value);
  };
  const onChangeSelectHandler = useCallback((name, value) => {
    onChange({
      ...order,
      [name]: value,
    });
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...order,
      [name]: value,
    });
  });

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChange({
      ...order,
      [name]: value,
    });
  });

  const clientInputHandler = useCallback((name, e) => {
    onChange({
      ...order,
      client: {
        [name]: e,
      },
    });
  });

  const onUpdateOrderHandler = useCallback(async (e) => {
    if (
      order.orderProductionName === '' ||
      order.orderProductionBrandName === '' ||
      order.orderProductionPrice === '' ||
      order.orderProductionQuantity === '' ||
      order.orderProductionStandard === '' ||
      order.orderProductionUnit === '' ||
      order.orderProductionEndDate === '' ||
      order.client === ''
    ) {
      message.error('???????????? ???????????????');
    } else {
      dispatch(putOrder({ orderIdParams, order }));
      changePageHandler();
      window.location.reload();
    }
  });

  const onDeleteHandler = (orderId) => {
    dispatch(deleteOrder(orderId));
    navigate('/admin/order/list');
    window.location.reload();
  };

  const dataInsert = () => {
    setOrder({
      orderId: data.orderId,
      orderProductionName: data.orderProductionName,
      orderProductionBrandName: data.orderProductionBrandName,
      orderProductionPrice: data.orderProductionPrice,
      orderProductionQuantity: data.orderProductionQuantity,
      orderProductionStandard: data.orderProductionStandard,
      orderProductionUnit: data.orderProductionUnit,
      orderProuctionFile: data.orderProuctionFile,
      orderProductionDescription: data.orderProductionDescription,
      orderProductionEndDate: data.orderProductionEndDate,
      orderDate: data.orderDate,
      client: data.client,
    });
  };

  return page ? (
    <AdminOrderInfoPresenter
      data={data}
      changePageHandler={changePageHandler}
      onDeleteHandler={onDeleteHandler}
    />
  ) : (
    <AdminOrderUpdate
      data={data}
      changePageHandler={changePageHandler}
      onChangeInputHandler={onChangeInputHandler}
      clientList={clientList}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      clientInputHandler={clientInputHandler}
      dataInsert={dataInsert}
      onUpdateOrderHandler={onUpdateOrderHandler}
      onChangeSelectHandler={onChangeSelectHandler}
    />
  );
}

export default AdminOrderInfoContainer;
