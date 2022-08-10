import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from './StaffBomListPresenter';
import { Link, useParams } from 'react-router-dom';
// const StaffBomListContainer = () => {
//   const [bomList, setBomList] = useState([]);
//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/BOM/list')
//       .then((reponse) => setBomList(reponse.data));
//     console.log(bomList);
//   }, []);
//   return <StaffBomListPresenter bomList={bomList} />;
// };

const columns = [
  {
    title: '원자재코드',
    dataIndex: 'bomId',
    key: 'bomId',
    render: (text) => <a>{text}</a>,
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
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/BOM/list')
      .then((reponse) => setBomList(reponse.data));
  }, []);
  return <StaffBomListPresenter columns={columns} bomList={bomList} />;
}

export default StaffBomListContainer;
