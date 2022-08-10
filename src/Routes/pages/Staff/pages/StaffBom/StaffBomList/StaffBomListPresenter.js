import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
const BomListPresenter = ({ columns, bomList }) => {
  return (
    <div>
      <button>상품재고</button>
      <button>BOM재고</button>
      <Link to="/staff/bom">
        <button>등록</button>
      </Link>
      <Table columns={columns} dataSource={bomList} />
    </div>
  );
};

export default BomListPresenter;
