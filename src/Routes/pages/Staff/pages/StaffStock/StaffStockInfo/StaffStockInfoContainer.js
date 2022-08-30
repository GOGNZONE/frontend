import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StaffStorageInfoPresenter from 'routes/pages/Staff/pages/StaffStock/StaffStockInfo/StaffStockInfoPresenter';
import { useDispatch, useSelector } from 'react-redux';
import * as api from 'apis/index';
import moment from 'moment';

function StaffStorageInfoContainer() {
  const { stockIdParams } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [updateButton, setUpdateButton] = useState(true);
  const stockInfo = useSelector((state) => state.stock.stock.data);
  const dispatch = useDispatch();

  useEffect(() => {
    storageInfoApi();
  }, []);
  const storageInfoApi = async () => {
    const stock = await api.getStockInfo(stockIdParams);
    dispatch({ type: 'GET_STOCK', payload: stock });
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

    // setStock({
    //   ...stock,
    //   [name]: value,
    // });
  };

  return (
    <StaffStorageInfoPresenter
      stockInfo={stockInfo}
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

export default StaffStorageInfoContainer;
