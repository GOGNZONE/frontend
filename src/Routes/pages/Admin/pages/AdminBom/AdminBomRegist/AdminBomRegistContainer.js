import React, { useState, useCallback, useEffect } from 'react';
import AdminBomRegistPresenter from 'Routes/pages/Admin/pages/AdminBom/AdminBomRegist/AdminBomRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getBomList, registerBom } from 'store/modules/bom/bomActions';
import { getStorageList } from 'store/modules/storage/storageActions';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const AdminBomRegistContainer = () => {
  const [bom, setBom] = useState({
    bomName: '',
    bomQuantity: '',
    bomStandard: '',
    bomUnit: '',
    bomDescription: '',
    bomReceivedDate: '',
    bomFile: '',
    storage: '',
  });
  const storageList = useSelector((state) => state.storage.storageList.data);
  const bomList = useSelector((state) => state.bom.bomList.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBomList());
    dispatch(getStorageList());
  }, [dispatch]);

  const onChange = useCallback((value) => {
    setBom(value);
  });

  const registBom = useCallback(async (e) => {
    if (
      bom.bomName === '' ||
      bom.bomQuantity === '' ||
      bom.bomStandard === '' ||
      bom.bomUnit === '' ||
      bom.bomReceivedDate === '' ||
      bom.storage === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      dispatch(registerBom(bom));
      navigate('/admin/bom/list');
      window.location.reload();
    }
  });

  const onChangeSelectHandler = useCallback((name, value) => {
    onChange({
      ...bom,
      [name]: value,
    });
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...bom,
      [name]: value,
    });
  });
  const storageInputHandler = useCallback((name, e) => {
    onChange({
      ...bom,
      storage: {
        [name]: e,
      },
    });
  });

  const bomParentInputHandler = useCallback((name, e) => {
    onChange({
      ...bom,
      bomParent: {
        [name]: e,
      },
    });
  });
  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChange({
      ...bom,
      [name]: value,
    });
  });

  return (
    <AdminBomRegistPresenter
      onChangeSelectHandler={onChangeSelectHandler}
      bom={bom}
      bomList={bomList}
      storageList={storageList}
      onChangeInputHandler={onChangeInputHandler}
      bomParentInputHandler={bomParentInputHandler}
      storageInputHandler={storageInputHandler}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      registBom={registBom}
    />
  );
};

export default AdminBomRegistContainer;
