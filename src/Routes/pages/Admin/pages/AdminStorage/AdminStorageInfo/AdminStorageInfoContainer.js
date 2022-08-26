import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminStorageInfoPresenter from 'Routes/pages/Admin/pages/AdminStorage/AdminStorageInfo/AdminStorageInfoPresenter';
import { getStorage, putStorage } from 'store/modules/storage/storageActions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function AdminStorageInfoContainer() {
  const { storageIdParams } = useParams();
  const [storage, setStorage] = useState([]);
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const { data, loading, error } = useSelector(
    (state) => state.storage.storage,
  );
  console.log(data);
  const dispatch = useDispatch();

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  useEffect(() => {
    dispatch(getStorage(storageIdParams));
  }, [storageIdParams, dispatch]);

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
  return;
  <div></div>;
  // return (
  //   <AdminStorageInfoPresenter
  //     storage={data}
  //     componentDisabled={componentDisabled}
  //     setComponentDisabled={setComponentDisabled}
  //     onFormLayoutChange={onFormLayoutChange}
  //     storageIdParams={storageIdParams}
  //     onChange={onChange}
  //     updateButton={updateButton}
  //     onButtonNameChange={onButtonNameChange}
  //   />
  // );
}

export default AdminStorageInfoContainer;
