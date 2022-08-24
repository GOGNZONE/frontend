import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from './StaffStorageInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../../../../../Apis/index';
import moment from 'moment';
function StaffStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const storageInfo = useSelector((state) => state.storage.storage.data);
  const dispatch = useDispatch();

  console.log(storageInfo);

  useEffect(() => {
    storageInfoApi();
  }, []);
  const storageInfoApi = async () => {
    const stor = await api.getStorageInfo(storageIdParams);
    dispatch({ type: 'GET_STORAGE', payload: stor });
  };

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onButtonNameChange = () => {
    setUpdateButton(!updateButton);
  };

  const onChange = (e) => {
    let { value, name } = '';

    if (e.target === undefined) {
      if (moment.isMoment(e.value)) {
        value = e.value.format('YYYY-MM-DD');
        name = e.name;
      } else {
        value = parseInt(e.value);
        name = e.name;
      }
    } else {
      value = e.target.value;
      name = e.target.name;
    }

    // setStorage({
    //   ...storage,
    //   [name]: value,
    // });
  };
  return (
    <StaffStorageInfoPresenter
      storageInfo={storageInfo}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      storageIdParams={storageIdParams}
      onChange={onChange}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
    />
  );
}

export default StaffStorageInfoContainer;
