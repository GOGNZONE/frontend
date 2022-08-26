import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
function BomListPresenter({ bomList }) {
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
      title: '원자재수량',
      dataIndex: 'bomQuantity',
      key: 'bomQuantity',
    },
    {
      title: '창고코드',
      key: 'storage',
      dataIndex: 'storage',
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
      render: () => (
        <Button
          type="primary"
          size="middle"
          style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
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
    </div>
  );
}

export default BomListPresenter;
