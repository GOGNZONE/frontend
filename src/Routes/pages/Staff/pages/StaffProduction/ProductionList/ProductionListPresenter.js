import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography, Modal, BackTop } from 'antd';

const { confirm } = Modal;

const columns = [
  {
    title: '생산코드',
    dataIndex: 'productionId',
  },
  {
    title: '생산품목',
    dataIndex: 'productionName',
    render: (name, record) => (
      <Link to={`/staff/production/${record.productionId}`}>{name}</Link>
    ),
  },
  {
    title: '브랜드',
    dataIndex: 'productionBrandName',
  },
  {
    title: '제품수량',
    dataIndex: 'productionQuantity',
  },
  {
    title: '단가',
    dataIndex: 'productionPrice',
  },
  {
    title: '비고',
    dataIndex: 'productionDescription',
  },
  {
    title: '삭제',
    dataIndex: 'deleteButton',
    align: 'center',
    render: () => (
      <Button
        type="primary"
        size="middle"
        style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
        onClick={showDeleteConfirm}
      >
        삭제
      </Button>
    ),
  },
];

const showDeleteConfirm = () => {
  confirm({
    title: '해당 제품을 삭제하시겠습니까?',
    icon: <ExclamationCircleOutlined />,
    okText: '확인',
    okType: 'danger',
    cancelText: '취소',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};

const ProductionListPresenter = ({ dataSource }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ margin: 5 }}>
          생산 목록
        </Typography.Title>
        <div>
          <Link to="/staff/release/list">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#293462',
                border: '#293462',
              }}
            >
              출고 목록
            </Button>
          </Link>
          <Link to="/staff/production">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
            >
              등록
            </Button>
          </Link>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ProductionListPresenter;
