import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBom,
  getBomList,
  deleteBom,
  registerBom,
  putBom,
} from 'store/modules/bom/bomActions';
import { getStorageList } from 'store/modules/storage/storageActions';
import AdminBomInfoPresenter from './AdminBomInfoPresenter';
import AdminBomUpdate from './AdminBomUpdate';
import { message } from 'antd';


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
  const storageList = useSelector((state) => state.storage.storageList.data);
  const bomList = useSelector((state) => state.bom.bomList.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    dispatch(getBom(bomIdParams));
    dispatch(getBomList());
    dispatch(getStorageList());
  }, [bomIdParams, dispatch]);

  const dataInsert = () => {
    setUpdateBom({
      bomId: data.bomId,
      bomName: data.bomName,
      bomQuantity: data.bomQuantity,
      bomPrice: data.bomPrice,
      bomStandard: data.bomStandard,
      bomUnit: data.bomUnit,
      bomDescription: data.bomDescription,
      bomReceivedDate: data.bomReceivedDate,
      bomFile: data.bomFile,
      storage: data.storage,
      bomParent: data.bomParent,
    });
  };

  const upBom = useCallback(async (e) => {
    if (
      updateBom.bomName === '' ||
      updateBom.bomQuantity === '' ||
      updateBom.bomStandard === '' ||
      updateBom.bomUnit === '' ||
      updateBom.bomReceivedDate === '' ||
      updateBom.storage === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      dispatch(putBom({ bomIdParams, updateBom }));
      changePageHandler();
      window.location.reload();
    }
  });

  const onChange = useCallback((value) => {
    setUpdateBom(value);
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...updateBom,
      [name]: value,
    });
  });

  const changePageHandler = () => {
    setPage(!page);
  };

  const onChangeSelectHandler = useCallback((name, value) => {
    onChange({
      ...updateBom,
      [name]: value,
    });
  });

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChange({
      ...updateBom,
      [name]: value,
    });
  });

  const storageInputHandler = useCallback((name, e) => {
    onChange({
      ...updateBom,
      storage: {
        [name]: e,
      },
    });
  });

  const bomParentInputHandler = useCallback((name, e) => {
    onChange({
      ...updateBom,
      bomParent: {
        [name]: e,
      },
    });
  });
  const onDeleteHandler = (bomId) => {
    dispatch(deleteBom(bomId));
    navigate('/admin/bom/list');
    window.location.reload();
  };

  return page ? (
    <AdminBomInfoPresenter data={data} changePageHandler={changePageHandler} />
  ) : (
    <AdminBomUpdate
      storageInputHandler={storageInputHandler}
      data={data}
      upBom={upBom}
      bomList={bomList}
      storageList={storageList}
      setPage={setPage}
      onChangeInputHandler={onChangeInputHandler}
      changePageHandler={changePageHandler}
      onChangeSelectHandler={onChangeSelectHandler}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      bomParentInputHandler={bomParentInputHandler}
      dataInsert={dataInsert}
    />
  );
}

export default AdminBomInfoContainer;
