import React from 'react';
import { Typography, Table, BackTop, Button, Modal, Spin, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Today from 'components/Today';

const { confirm } = Modal;
const { Text } = Typography;

const ReleaseListPresenter = ({ dataSource, loading, onDeleteRelease }) => {
  const showDeleteConfirm = (releaseId) => {
    confirm({
      title: '해당 출고를 삭제하시겠습니까?',
      icon: <ExclamationCircleOutlined />,
      okText: '확인',
      okType: 'danger',
      cancelText: '취소',

      onOk() {
        onDeleteRelease(releaseId);
      },
    });
  };

  const columns = [
    {
      title: '출고코드',
      dataIndex: 'releaseId',
      render: (id) => <Link to={`/admin/release/${id}`}>{id}</Link>,
    },
    {
      title: '출고일자',
      dataIndex: 'releaseDate',
      width: 180,
      render: (date, record) => (
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          key={record.releaseId}
        >
          {record.releaseConfirmed ? (
            <Text style={{ marginRight: 5 }} delete>
              {date}
            </Text>
          ) : (
            <Text mark style={{ marginRight: 5 }}>
              {date}
            </Text>
          )}
          {record.releaseConfirmed ? (
            <Tag color="#f50">출고확정</Tag>
          ) : (
            <Today releaseDate={date} />
          )}
        </div>
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
    {
      title: '삭제',
      dataIndex: 'deleteButton',
      width: 100,
      align: 'center',
      render: (name, record) => (
        <Button
          type="primary"
          size="middle"
          danger
          ghost
          onClick={() => {
            showDeleteConfirm(record.releaseId);
          }}
          disabled={record.releaseConfirmed ? true : false}
        >
          삭제
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
        <Link to="/admin/production/list-completed">
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
