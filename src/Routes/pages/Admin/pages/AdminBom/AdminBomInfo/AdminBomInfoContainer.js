import React, { useState, useEffect } from 'react';
import AdminBomInfoPresenter from 'Routes/pages/Admin/pages/AdminBom/AdminBomInfo/AdminBomInfoPresenter';
import { useParams } from 'react-router-dom';

import moment from 'moment';
function AdminBomInfoContainer() {
  const [bom, setBom] = useState([]);
  const { bomIdParams } = useParams();
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
  };
  return (
    <AdminBomInfoPresenter
      onChange={onChange}
      updateButton={updateButton}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onButtonNameChange={onButtonNameChange}
      onFormLayoutChange={onFormLayoutChange}
      bom={bom}
      bomIdParams={bomIdParams}
    />
  );
}

export default AdminBomInfoContainer;
