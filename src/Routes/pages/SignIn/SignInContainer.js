import React, { useEffect } from 'react';
import SignInPresenter from './SignInPresenter';
import api from 'Apis/apiController';
import { useDispatch, useSelector } from 'react-redux';
// import { chagneField, chagneFields } from '../../../store/modules/auth';
import { changeField, changeFields } from 'store/modules/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector(({ auth }) => {
    return {
      login: auth.login,
      admin: auth.admin,
    };
  });

  let loginInit = { employee_email: '', employee_password: '' };

  useEffect(() => {
    dispatch(changeFields({ form: 'login', key: loginInit }));
    // eslint-disable-next-line
  }, [dispatch]);

  /* 로그인 input 값 변경 */
  const onLoginChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 로그인
  const onLogin = async (e) => {
    const { employee_email, employee_password } = login;

    let data = {
      employeeEmail: employee_email,
      employeePassword: employee_password,
    };

    api.post('/auth/login', data).then((response) => {
      if (response.data.accessToken) {
        // localstorage 토큰 저장
        localStorage.setItem('ACCESS_TOKEN', response.data.accessToken);
        localStorage.setItem('AUTH', response.data.employeeRole);
        localStorage.setItem('EXPIRSE', response.data.tokenExpiresIn);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '로그인 성공',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          response.data.employeeRole === 'ADMIN'
            ? navigate('/admin')
            : navigate('/staff');
        }, 2000);
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '아이디 또는 비밀번호가\n틀렸습니다',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate('/');
        }, 1800);
      }
    });
  };

  return (
    <SignInPresenter
      login={login}
      onLoginChange={onLoginChange}
      onLogin={onLogin}
    />
  );
};

export default React.memo(SignInContainer);
