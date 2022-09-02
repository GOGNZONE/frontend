import React, { useCallback } from 'react';
import AdminBomRegistPresenter from 'routes/pages/Admin/pages/AdminBom/AdminBomRegist/AdminBomRegistPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';

const AdminBomRegistContainer = () => {
  const bom = useSelector((state) => state.bom.bom);
  const dispatch = useDispatch();

  const onChange = useCallback((value) => {
    dispatch({ type: 'POST_BOM', payload: value });
  });

  const registBom = (e) => {
    e.preventDefault();
    api.registerBom(bom);
  };

  const onChangeInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...bom,
      [name]: value,
    });
  });

  const bomParentInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...bom,
      bomParent: {
        [name]: value,
      },
    });
  });

  const storageInputHandler = useCallback((name, e) => {
    const value = e.target.value;
    onChange({
      ...bom,
      storage: {
        [name]: value,
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
      bom={bom}
      onChangeInputHandler={onChangeInputHandler}
      bomParentInputHandler={bomParentInputHandler}
      storageInputHandler={storageInputHandler}
      onChangeDatePickerHandler={onChangeDatePickerHandler}
      registBom={registBom}
    />
  );
};

export default AdminBomRegistContainer;
