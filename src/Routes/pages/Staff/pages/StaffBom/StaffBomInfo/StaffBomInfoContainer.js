import React, { useState, useEffect } from 'react';
import StaffBomInfoPresenter from 'Routes/pages/Staff/pages/StaffBom/StaffBomInfo/StaffBomInfoPresenter';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'Apis/index';
import moment from 'moment';

function StaffBomInfoContainer() {
  const { bomIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const bomInfo = useSelector((state) => state.bom.bom.data);
  const dispatch = useDispatch();
  console.log(bomInfo);
  useEffect(() => {
    bomInfoApi();
  }, []);
  const bomInfoApi = async () => {
    const bom = await api.getBomInfo(bomIdParams);
    dispatch({ type: 'GET_BOM', payload: bom });
  };
  console.log(bomInfo);
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

    // setBom({
    //   ...bom,
    //   [name]: value,
    // });
  };
  return (
    <StaffBomInfoPresenter
      onChange={onChange}
      updateButton={updateButton}
      componentDisabled={componentDisabled}
      setComponentDisabled={setComponentDisabled}
      onButtonNameChange={onButtonNameChange}
      onFormLayoutChange={onFormLayoutChange}
      bomInfo={bomInfo}
      bomIdParams={bomIdParams}
    />
  );
}

export default StaffBomInfoContainer;
