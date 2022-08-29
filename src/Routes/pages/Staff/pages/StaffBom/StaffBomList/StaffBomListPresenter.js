import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
function StaffBomListPresenter({ bomList }) {
  const columns = [
    {
      title: '원자재코드',
      dataIndex: 'bomId',
      key: 'bomId',
      render: (id, index) => (
        <Link to={`/staff/bom/list/${index.bomId}`}>{id}</Link>
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
  ];

  return (
    <div>
      <h2>BOM 리스트</h2>
      <Link to="/staff/bom">
        <Button>등록</Button>
      </Link>
      <Table rowKey={() => v4()} columns={columns} dataSource={bomList} />
    </div>
  );
}

export default StaffBomListPresenter;
