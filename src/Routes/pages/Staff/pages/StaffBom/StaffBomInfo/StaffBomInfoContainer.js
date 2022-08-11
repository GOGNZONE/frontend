import React, { useState, useEffect } from 'react';
import StaffBomInfoPresenter from './StaffBomInfoPresenter';
import { useParams } from 'react-router-dom';
import { getBom } from '../../../../../../Apis/api/bomApi';

function StaffBomInfoContainer() {
  const [bom, setBom] = useState([]);
  const { bomIdParams } = useParams();

  const getBomApi = (bomIdParams) => {
    getBom(bomIdParams).then((response) => setBom(response.data));
  };

  useEffect(() => {
    getBomApi(bomIdParams);
  }, []);

  return <StaffBomInfoPresenter bom={bom} />;
}

export default StaffBomInfoContainer;
