import React, { useEffect } from 'react';
import StaffMypagePresenter from './StaffMypagePresenter';
import { useDispatch, useSelector } from 'react-redux';
import { getMypage } from 'modules/mypage';

const StaffMypageContainer = () => {
  const { data, loading, error } = useSelector((state) => state.mypage.mypage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMypage());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <StaffMypagePresenter mypage={data} />;
};

export default StaffMypageContainer;
