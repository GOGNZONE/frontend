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
  const [page, setPage] = useState(true);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.employee.mypage,
  );
  const [updateMyProfile, setUpdateMyProfile] = useState({});
  const onchangeHandler = (value) => {
    console.log(value);
    setUpdateMyProfile(value);
  };

  const onSetMyProfile = (data) => {
    setUpdateMyProfile(data);
  };

  const onUpdateHandler = async () => {
    const {
      newPassword,
      confirmPassword,
      employeeEmail,
      employeeName,
      employeePhone,
    } = updateMyProfile;

    employeeEmail !== '' &&
    employeeName !== '' &&
    employeePhone !== '' &&
    newPassword !== '' &&
    confirmPassword !== ''
      ? newPassword === confirmPassword
        ? await (dispatch(updateProfile(updateMyProfile)),
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '수정완료',
            showConfirmButton: false,
            timer: 1500,
          }),
          window.location.reload())
        : Swal.fire({
            position: 'center',
            icon: 'error',
            title: '비밀번호를 확인해주세요',
            showConfirmButton: false,
            timer: 1500,
          })
      : Swal.fire({
          position: 'center',
          icon: 'error',
          title: '필수값을 입력해주세요',
          showConfirmButton: false,
          timer: 1500,
        });
  };

  const onResetHandler = () => {
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
      onSetMyProfile={onSetMyProfile}
    />
  ) : (
    <UpdateMyProfileInfo
      mypage={data}
      loading={loading}
      error={error}
      setPage={setPage}
      updateMyProfile={updateMyProfile}
      onChangeHandler={onchangeHandler}
      onUpdateHandler={onUpdateHandler}
      onResetHandler={onResetHandler}
    />
  );
};

export default StaffMypageContainer;
