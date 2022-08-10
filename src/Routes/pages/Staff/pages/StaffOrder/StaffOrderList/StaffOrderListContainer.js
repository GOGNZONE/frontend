import React, { useEffect, useState } from 'react';
import StaffOrderListPresenter from './StaffOrderListPresenter';
import axios from 'axios';
function StaffOrderListContainer() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/order/list')
      .then((response) => setOrderList(response.data));
  }, []);
  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id) => (
        // <Link to={`/staff/storage/list/${id}`}>
        <a>{id}</a>
        // </Link>
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
