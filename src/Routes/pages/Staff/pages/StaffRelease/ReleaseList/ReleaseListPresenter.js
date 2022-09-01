import React from 'react';
import { Typography, Table, BackTop, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const ReleaseListPresenter = ({ dataSource, loading }) => {
  const columns = [
    {
      title: '출고코드',
      dataIndex: 'releaseId',
      render: (id) => <Link to={`/staff/release/${id}`}>{id}</Link>,
    },
    {
      title: '출고일자',
      dataIndex: 'releaseDate',
      render: (date) => (
        <>
          <Text mark>{date}</Text>
        </>
      ),
    },
    {
      title: '출고수량',
      dataIndex: 'releaseQuantity',
    },
    {
      title: '출고방식',
      dataIndex: 'releaseType',
    },
    {
      title: '출고 대상 회사',
      dataIndex: 'clientName',
    },
    {
      title: '출고 대상 상품',
      dataIndex: 'productionName',
    },
    {
      title: '카카오 알림톡',
      dataIndex: 'kakaoNotification',
      align: 'center',
      render: () => (
        <Button
          type="primary"
          size="middle"
          style={{
            backgroundColor: '#FAE100',
            border: '#FAE100',
            color: '#3C1E1E',
          }}
        >
          전송
        </Button>
      ),
    },
  ];
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          출고 목록
        </Typography.Title>
        <Link to="/staff/production/list">
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#293462',
              border: '#293462',
            }}
          >
            생산 목록
          </Button>
        </Link>
      </div>
      <Spin spinning={loading}>
        <Table
          rowKey="releaseId"
          columns={columns}
          dataSource={dataSource}
          tableLayout="fixed"
        />
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseListPresenter;
