import React, { useState, useEffect } from 'react';
import { getOrderList } from '../../../../../../Apis/api/orderApi';
import { Link } from 'react-router-dom';
import StaffOrderListPresenter from './StaffOrderListPresenter';
function StaffOrderListContainer() {
  const [orderList, setOrderList] = useState([]);
  const getOrderApi = () => {
    getOrderList().then((response) => {
      setOrderList(response.data);
    });
  };

  useEffect(() => {
    getOrderApi();
  }, []);

  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id, index) => (
        <Link to={`/staff/order/list/${index.orderId}`}>{id}</Link>
      ),
    },
    {
      title: '주문 제품명',
      dataIndex: 'orderProductionName',
      key: 'orderProductionName',
    },
    {
      title: '주문 제품 브랜드명',
      dataIndex: 'orderProductionBrandName',
      key: 'orderProductionBrandName',
    },
    {
      title: '주문 제품 가격',
      dataIndex: 'orderProductionPrice',
      key: 'orderProductionPrice',
    },
    {
      title: '주문 수량',
      dataIndex: 'orderProductionQuantity',
      key: 'orderProductionQuantity',
    },
    {
      title: '비고',
      dataIndex: 'orderProductionDescription',
      key: 'orderProductionDescription',
    },
  ];
  return <StaffOrderListPresenter columns={columns} orderList={orderList} />;
}

export default StaffOrderListContainer;
