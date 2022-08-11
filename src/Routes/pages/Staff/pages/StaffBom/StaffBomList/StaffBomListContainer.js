import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from './StaffBomListPresenter';
import { getBomList } from '../../../../../../Apis/api/bomApi';
import { Link } from 'react-router-dom';

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

function StaffBomListContainer() {
  const [bomList, setBomList] = useState([]);
  const getBomListApi = () => {
    getBomList().then((response) => setBomList(response.data));
  };

  useEffect(() => {
    getBomListApi();
  }, []);
  return <StaffBomListPresenter columns={columns} bomList={bomList} />;
}

export default StaffBomListContainer;
