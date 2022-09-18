import React, { useState } from 'react';
import { Button, Modal, Typography, Badge, Table } from 'antd';
import moment from 'moment';

const { Text } = Typography;

const LocalizedModal = ({ productionHistory }) => {
  /***** state *****/
  const [modalOpen, setModalOpen] = useState(false);

  const columns = [
    {
      title: '수정일자',
      dataIndex: 'productionHistoryCorrectionDate',
      width: 120,
      sorter: (a, b) =>
        moment(a.productionHistoryCorrectionDate).unix() -
        moment(b.productionHistoryCorrectionDate).unix(),
    },
    {
      title: '유형',
      dataIndex: 'productionHistoryType',
      width: 120,
      render: (type) =>
        type === 0 ? (
          <Text type="success">진행 상황 변경</Text>
        ) : (
          <Text type="warning">생산 정보 변경</Text>
        ),
    },
    {
      title: '비고',
      dataIndex: 'productionHistoryDescription',
      render: (text, record) =>
        record.productionHistoryType ? (
          <Text>{text}</Text>
        ) : (
          <>
            {text === '0' ? (
              <Badge status="success" text="생산 시작전" />
            ) : text === '1' ? (
              <Badge status="processing" text="생산중" />
            ) : (
              <Badge status="error" text="생산 완료" />
            )}
            {'(으)로 변경'}
          </>
        ),
    },
  ];

  return (
    <>
      <Badge count={productionHistory.length} offset={[-10, -2]}>
        <Button
          type="primary"
          onClick={() => setModalOpen(true)}
          style={{
            marginRight: 5,
            backgroundColor: '#A2B5BB',
            borderColor: '#A2B5BB',
          }}
        >
          정보 수정 이력
        </Button>
      </Badge>
      <Modal
        title="생산정보 수정 이력"
        style={{
          top: 100,
        }}
        visible={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okText="확인"
        cancelText="취소"
        width={600}
      >
        <Table
          rowKey="productionHistoryId"
          columns={columns}
          dataSource={productionHistory}
          pagination={false}
          bordered
          showSorterTooltip={{ title: '정렬' }}
        />
      </Modal>
    </>
  );
};

export default LocalizedModal;
