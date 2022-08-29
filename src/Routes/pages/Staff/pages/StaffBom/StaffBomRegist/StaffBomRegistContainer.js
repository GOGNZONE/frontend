import React, { useState, useCallback, useEffect } from 'react';
import StaffBomRegistPresenter from './StaffBomRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getBomList, registerBom } from 'store/modules/bom/bomActions';
import { message } from 'antd';

const StaffBomRegistContainer = () => {
  const [bom, setBom] = useState({
    bomName: '',
    bomQuantity: '',
    bomStandard: '',
    bomUnit: '',
    bomDescription: '',
    bomReceivedDate: '',
    bomFile: '',
  });

  const storageList = useSelector((state) => state.storage.storageList.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBomList());
  }, [dispatch]);

  // console.log(bom);

  const onChange = useCallback((value) => {
    setBom(value);
  });

  const registBom = useCallback(async (e) => {
    if (bom.bomName === '') {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      await dispatch(registerBom(bom));
      // await navigate('list');
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
  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChange({
      ...bom,
      [name]: value,
    });
  });

  return (
    <StaffBomRegistPresenter
      onChangeSelectHandler={onChangeSelectHandler}
      bom={bom}
      storageList={storageList}
      onChangeInputHandler={onChangeInputHandler}
      // bomParentInputHandler={bomParentInputHandler}
      storageInputHandler={storageInputHandler}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      registBom={registBom}
    />
  );
};

export default StaffBomRegistContainer;
