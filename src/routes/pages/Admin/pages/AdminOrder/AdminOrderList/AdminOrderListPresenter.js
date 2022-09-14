import React, { useState } from 'react';
import { Typography, Table, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function AdminOrderListPresenter({
  orderList,
  onDeleteHandler,
  setDeleteModal,
  deleteModal,
}) {
  const [tmpId, setTmpId] = useState();
  const columns = [
    {
      title: '주문 코드',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (id, index) => (
        <Link to={`/admin/order/list/${index.orderId}`}>{id}</Link>
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
    {
      title: '삭제',
      dataIndex: 'orderId',
      key: 'orderId',
      align: 'center',
      render: (id, index) => (
        <Button
          type="primary"
          size="middle"
          style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
          onClick={() => {
            setDeleteModal(true);
            setTmpId(`${index.orderId}`);
          }}
        >
          삭제
        </Button>
      ),
    },
  ];
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          발주 목록
        </Typography.Title>
        <Link to="/admin/order">
          <Button>등록</Button>
        </Link>
      </div>
      <Table
        showSorterTooltip={{ title: '정렬' }}
        rowKey={() => v4()}
        columns={columns}
        dataSource={orderList}
      />
      <Modal
        title="삭제"
        centered
        visible={deleteModal}
        onOk={() => onDeleteHandler(tmpId)}
        okText="삭제"
        onCancel={() => setDeleteModal(false)}
        cancelText="취소"
      >
        <p>정말로 삭제하시겠습니까?</p>
      </Modal>
    </div>
  );
}

export default AdminOrderListPresenter;
