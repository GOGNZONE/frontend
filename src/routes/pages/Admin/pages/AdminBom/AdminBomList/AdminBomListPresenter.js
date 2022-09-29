import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
function AdminBomListPresenter({ bomList, onDeleteHandler }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [tmpId, setTmpId] = useState();
  const columns = [
    {
      title: '원자재코드',
      dataIndex: 'bomId',
      key: 'bomId',
      render: (id, index) => (
        <Link to={`/admin/bom/list/${index.bomId}`}>{id}</Link>
      ),
    },
    {
      title: '원자재명',
      dataIndex: 'bomName',
      key: 'bomName',
    },
    {
      title: '원자재 수량',
      dataIndex: 'bomQuantity',
      key: 'bomQuantity',
    },
    {
      title: '원자재 단가',
      key: 'bomPrice',
      dataIndex: 'bomPrice',
    },
    {
      title: '비고',
      key: 'bomDescription',
      dataIndex: 'bomDescription',
    },
    {
      title: '삭제',
      dataIndex: 'deleteButton',
      align: 'center',
      dataIndex: 'bomId',
      key: 'bomId',
      render: (id, index) => (
        <Button
          type="primary"
          size="middle"
          style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
          // onClick={() => onDeleteHandler(`${index.bomId}`)}
          onClick={() => {
            setDeleteModal(true);
            setTmpId(`${index.bomId}`);
          }}
        >
          삭제
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>BOM 리스트</h2>
      <Link to="/admin/bom">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={bomList} />
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

export default AdminBomListPresenter;
