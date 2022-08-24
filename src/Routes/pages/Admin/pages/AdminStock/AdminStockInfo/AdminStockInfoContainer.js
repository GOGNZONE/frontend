import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminStorageInfoPresenter from './AdminStockInfoPresenter';

import moment from 'moment';

function AdminStorageInfoContainer() {
  const { stockIdParams } = useParams();
  const [stock, setStock] = useState([]);
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);

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

    setStock({
      ...stock,
      [name]: value,
    });
  };
  return (
    <AdminStorageInfoPresenter
      stock={stock}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onFormLayoutChange={onFormLayoutChange}
      stockIdParams={stockIdParams}
      onChange={onChange}
      updateButton={updateButton}
      onButtonNameChange={onButtonNameChange}
    />
  );
}

export default AdminStorageInfoContainer;
