import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const StaffHeader = ({ logout }) => {
  return (
    <Header className="site-layout-background" style={{ padding: '0px 30px' }}>
      <div style={{ float: 'right' }}>
        <>
          <span style={{ marginRight: '20px' }}>STAFF</span>
          <span className="site-header-logout" onClick={logout}>
            로그아웃
          </span>
        </>
      </div>
    </Header>
  );
};

export default StaffHeader;
