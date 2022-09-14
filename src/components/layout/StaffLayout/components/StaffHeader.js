import React from 'react';
import { Layout } from 'antd';
import logo from 'assets/header_logo.png';

const { Header } = Layout;

const StaffHeader = ({ logout }) => {
  return (
    <Header className="site-layout-background" style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <>
          <div>
            <span>
              <img src={logo} style={{ width: '200px', height: '27px' }} />
            </span>
          </div>
          <div>
            <span style={{ marginRight: '20px', fontSize: 16 }}>STAFF</span>
            <span
              className="site-header-logout"
              onClick={logout}
              style={{ fontSize: 16 }}
            >
              로그아웃
            </span>
          </div>
        </>
      </div>
    </Header>
  );
};

export default StaffHeader;
