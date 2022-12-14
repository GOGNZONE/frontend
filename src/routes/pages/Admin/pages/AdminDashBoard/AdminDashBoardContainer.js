import React, { useEffect, useState } from 'react';
import AdminDashBoardPresenter from './AdminDashBoardPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getReleases } from 'store/modules/release/releaseActions';
import moment from 'moment';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

const AdminDashBoardContainer = () => {
  /***** redux (state) *****/
  const { data, loading } = useSelector((state) => state.release.releases);
  const dispatch = useDispatch();
  /***** state *****/
  const [releaseConfirmedList, setReleaseConfirmedList] = useState([]);
  const [value, setValue] = useState(moment(today));
  const [selectedValue, setSelectedValue] = useState(moment(today));

  useEffect(() => {
    dispatch(getReleases());
  }, [dispatch]);

  return (
    <AdminDashBoardPresenter
      dataSource={data}
      loading={loading}
      releaseConfirmedList={releaseConfirmedList}
      setReleaseConfirmedList={setReleaseConfirmedList}
      value={value}
      setValue={setValue}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      year={year}
      month={month}
    />
  );
};

export default AdminDashBoardContainer;
