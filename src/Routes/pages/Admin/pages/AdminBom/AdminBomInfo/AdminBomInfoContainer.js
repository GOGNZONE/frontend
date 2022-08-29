import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBom, deleteBom, registerBom } from 'store/modules/bom/bomActions';
import AdminBomInfoPresenter from './AdminBomInfoPresenter';
import AdminBomUpdate from './AdminBomUpdate';
import moment from 'moment';

function AdminBomInfoContainer() {
  const { bomIdParams } = useParams();
  const [page, setPage] = useState(true);
  const [updateBom, setUpdateBom] = useState({
    bomName: '',
    bomQuantity: '',
    bomStandard: '',
    bomUnit: '',
    bomDescription: '',
    bomReceivedDate: '',
    bomFile: '',
    storage: '',
    bomParent: '',
  });
  const { data, loading, error } = useSelector((state) => state.bom.bom);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBom(bomIdParams));
  }, [bomIdParams, dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUpdateBom({
      ...updateBom,
      [name]: value,
    });
  };

  const changePageHandler = () => {
    setPage(!page);
    console.log(page);
  };

  // const updateHandler = () => {
  //   dispatch(
  //     registerBom({
  //       bomId: bomIdParams,
  //       inData: bom,
  //     }),
  //   );
  // };

  return page ? (
    <AdminBomInfoPresenter data={data} changePageHandler={changePageHandler} />
  ) : (
    <AdminBomUpdate
      data={data}
      setPage={setPage}
      onChangeHandler={onChangeHandler}
    />
  );
}

export default AdminBomInfoContainer;
