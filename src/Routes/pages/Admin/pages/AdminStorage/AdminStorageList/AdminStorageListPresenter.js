import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function AdminStorageListPresenter({ storageList, onDeleteHandler }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [tmpId, setTmpId] = useState();
  const columns = [
    {
      title: '창고 코드',
      dataIndex: 'storageId',
      key: 'storageId',
      render: (id, index) => (
        <Link to={`/admin/storage/list/${index.storageId}`}>{id}</Link>
      ),
    },
    {
      title: '창고 주소',
      dataIndex: 'storageAddress',
      key: 'storageAddress',
    },
    {
      title: '창고 종류',
      dataIndex: 'storageCategory',
      key: 'storageCategory',
    },
    {
      title: '비고',
      dataIndex: 'storageDescription',
      key: 'storageDescription',
    },
    {
      title: '삭제',
      dataIndex: 'storageId',
      key: 'storageId',
      align: 'center',
      render: (id, index) => (
        <Button
          type="primary"
          size="middle"
          style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
          onClick={() => {
            setDeleteModal(true);
            setTmpId(`${index.storageId}`);
          }}
        >
          삭제
        </Button>
      ),
    },
  ];
  return (
    <div>
      <Link to="/admin/Storage">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={storageList} />
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

export default AdminStorageListPresenter;
