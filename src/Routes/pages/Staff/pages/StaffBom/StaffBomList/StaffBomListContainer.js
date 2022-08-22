import React, { useEffect, useState } from 'react';
import StaffBomListPresenter from './StaffBomListPresenter';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getBomList } from '../../../../../../Apis/index';

function StaffBomListContainer() {
  const [bomList, setBomList] = useState([]);

  const getBomListApi = () => {
    getBomList().then((response) => setBomList(response.data));
  };

  useEffect(() => {
    getBomListApi();
  }, []);

  return (
    <div>
      {/* <Provider store={store}> */}
      <StaffBomListPresenter bomList={bomList} />
      {/* </Provider> */}
    </div>
  );
}

export default StaffBomListContainer;
