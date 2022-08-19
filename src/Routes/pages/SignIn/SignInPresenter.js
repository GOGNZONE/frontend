import React from 'react';
import './signin.css';
import { Form, Input, Button } from 'antd';
import LOGO from '../../../assets/logo.png';

const SignInPresenter = ({ login, onLoginChange, onLogin }) => {
  return (
    <div className="signin-container">
      <div className="login-wrapper">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <h3 className="title">GONGZONE</h3>
        <p className="desc">소규모 공장 / 공방 관리 시스템</p>
        <>
          <Form>
            <Form.Item name={'employee_email'}>
              <Input
                type="text"
                placeholder="아이디"
                autoComplete="off"
                onChange={onLoginChange}
                value={login.employee_email}
                name="employee_email"
              />
            </Form.Item>
            <Form.Item name={'employee_password'}>
              <Input
                type="password"
                placeholder="비밀번호"
                autoComplete="off"
                onChange={onLoginChange}
                value={login.employee_password}
                name="employee_password"
              />
            </Form.Item>
            <div className="buttons">
              <Button
                type="default"
                className="login-button"
                shape="round"
                size="large"
                // htmlType="submit"
                onClick={onLogin}
              >
                로그인
              </Button>
            </div>
          </Form>
        </>
      </div>
    </div>
  );
};

export default SignInPresenter;
