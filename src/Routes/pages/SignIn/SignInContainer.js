import React, { useEffect, useState } from 'react';
import SignInPresenter from './SignInPresenter';
import * as api from '../../../apis/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  chagneField,
  chagneFields,
  initializeForm,
} from '../../../modules/auth';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignInContainer = () => {
  // console.log(api.login);
  const dispatch = useDispatch();
  const { login } = useSelector(({ auth }) => {
    return {
      login: auth.login,
      register: auth.register,
    };
  });

  let loginInit = { employee_email: '', employee_password: '' };
  useEffect(() => {
    dispatch(chagneFields({ form: 'login', key: loginInit }));
  }, [dispatch]);

  /* 로그인 input 값 변경 */
  const onLoginChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(
      chagneField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 로그인
  const onLogin = async (e) => {
    // e.preventDefault();
    console.log(login);
    const { employee_email, employee_password } = login;

    let data = {
      employeeEmail: employee_email,
      employeePassword: employee_password,
    };

    // axios.post('http://localhost:8080/auth/login', data).then((res) => {
    //   console.log(res.data);
    // });

    axios.post('http://localhost:8080/auth/login', data).then((response) => {
      // api.login(data).then((response) => {
      console.log(response.data);
      if (response.data.accessToken) {
        // localstorage 토큰 저장
        // localStorage.setItem('ACCESS_TOKEN', response.data.accessToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '로그인 성공',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          response.data.employeeRole === 'ADMIN'
            ? (window.location.href = '/admin')
            : (window.location.href = '/staff');
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '아이디 또는 비밀번호가\n틀렸습니다',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
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

export default SignInContainer;
