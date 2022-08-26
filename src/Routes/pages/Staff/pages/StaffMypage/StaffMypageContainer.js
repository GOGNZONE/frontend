import React, { useEffect, useState } from 'react';
import StaffMypagePresenter from './StaffMypagePresenter';
import UpdateMyProfileInfo from './UpdateMyProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMypage,
  updateProfile,
} from 'store/modules/employee/employeeActions';
import Swal from 'sweetalert2';

const StaffMypageContainer = () => {
  const [updateMyProfile, setUpdateMyProfile] = useState({
    employeeEmail: '',
    newPassword: '',
    confirmPassword: '',
    employeeName: '',
    employeePhone: '',
    employeeAddress: '',
    employeeImage: '',
  });
  const [page, setPage] = useState(true);
  const { data, loading, error } = useSelector(
    (state) => state.employee.mypage,
  );
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateMyProfile({
      ...updateMyProfile,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    const { newPassword, confirmPassword } = updateMyProfile;
    if (newPassword === confirmPassword) {
      dispatch(updateProfile(updateMyProfile));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '수정완료',
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '비밀번호를 확인해주세요',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onResetInput = () => {
    setUpdateMyProfile({
      employeeEmail: '',
      newPassword: '',
      confirmPassword: '',
      employeeName: '',
      employeePhone: '',
      employeeAddress: '',
      employeeImage: '',
    });
  };

  useEffect(() => {
    dispatch(getMypage());
  }, [dispatch]);

  return page ? (
    <StaffMypagePresenter
      mypage={data}
      loading={loading}
      error={error}
      setPage={setPage}
    />
  ) : (
    <UpdateMyProfileInfo
      mypage={data}
      setPage={setPage}
      onChangeHandler={onChangeHandler}
      onUpdateHandler={onUpdateHandler}
      updateMyProfile={updateMyProfile}
      onResetInput={onResetInput}
    />
  );
};

export default StaffMypageContainer;
