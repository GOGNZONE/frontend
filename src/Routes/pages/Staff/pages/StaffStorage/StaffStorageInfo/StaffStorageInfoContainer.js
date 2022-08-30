import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from 'routes/pages/Staff/pages/StaffStorage/StaffStorageInfo/StaffStorageInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage } from 'store/modules/storage/storageActions';

import moment from 'moment';
function StaffStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const { data, loading, error } = useSelector(
    (state) => state.storage.storage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [dispatch]);

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
  };

  return (
    <StaffStorageInfoPresenter
      storageInfo={data}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      onChange={onChange}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
    />
  );
  return <div>ㅅㅂ</div>;
}

export default StaffStorageInfoContainer;
