import React, { useEffect } from 'react';
import SignInPresenter from './SignInPresenter';
import api from 'apis/apiController';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, changeFields } from 'store/modules/auth';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

const SignInContainer = ({ authToken }) => {
  const { login } = useSelector(({ auth }) => {
    return {
      login: auth.login,
      admin: auth.admin,
    };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginInit = { employee_email: '', employee_password: '' };

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
  const onLogin = async (values) => {
    const { employee_email, employee_password } = login;
    let data = {
      employeeEmail: employee_email,
      employeePassword: employee_password,
    };

    api.post('/auth/login', data).then((response) => {
      if (response.data.accessToken) {
        // localstorage 토큰 저장
        localStorage.setItem('ACCESS_TOKEN', response.data.accessToken);
        localStorage.setItem('EXPIRE', response.data.tokenExpiresIn);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '로그인 성공',
          showConfirmButton: false,
          timer: 1500,
        });
        const token = jwt_decode(response.data.accessToken);
        const { auth } = token;
        setTimeout(() => {
          auth === 'ADMIN' ? navigate('/admin') : navigate('/staff');
        }, 2000);
      }
    });
  };

  const isLogin = () => {
    const decodedToken = jwt_decode(authToken);
    const { auth } = decodedToken;

    if (auth && auth === 'ADMIN') return navigate('/admin');
    if (auth && auth === 'STAFF') return navigate('/staff');
  };

  useEffect(() => {
    dispatch(changeFields({ form: 'login', key: loginInit }));
    if (authToken !== null) {
      isLogin();
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <SignInPresenter
      login={login}
      onLoginChange={onLoginChange}
      onLogin={onLogin}
    />
  );
};

export default React.memo(SignInContainer);
