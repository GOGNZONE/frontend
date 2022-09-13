import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { StaffHeader, StaffSider } from './components';
import '../layout.css';

const { Content, Footer } = Layout;

const StaffLayout = ({ logout }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (val) => {
    setCollapsed(val);
  };

  return (
    <Layout className="site-layout-container" style={{ minHeight: '100vh' }}>
      <StaffSider
        collapsed={collapsed}
        onCollapse={onCollapse}
        logout={logout}
      />
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px', padding: '15px' }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 200,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          GONGZONE ©2022 Created by GONGZONE TEAM
        </Footer>
      </Layout>
    </Layout>
  );
};

export default StaffLayout;
