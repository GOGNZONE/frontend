import React, { useState, useEffect } from 'react';
import StaffBomInfoPresenter from './StaffBomInfoPresenter';
import { useParams } from 'react-router-dom';

import moment from 'moment';
function StaffBomInfoContainer() {
  const [bom, setBom] = useState([]);
  const { bomIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);

  const getBomApi = (bomIdParams) => {
    getBom(bomIdParams).then((response) => setBom(response.data));
  };

  useEffect(() => {
    getBomApi(bomIdParams);
  }, []);

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

    setBom({
      ...bom,
      [name]: value,
    });
  };
  return (
    <StaffBomInfoPresenter
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

export default StaffBomInfoContainer;
