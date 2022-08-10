import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { StaffHeader, StaffSider } from './components';
import './admin_layout.css';

const { Content, Footer } = Layout;

const StaffLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (val) => {
    setCollapsed(val);
  };

  return (
    <Layout className="site-layout-container" style={{ minHeight: '100vh' }}>
      <StaffSider collapsed={collapsed} onCollapse={onCollapse} />
      <Layout className="site-layout">
        <StaffHeader />
        <Content style={{ margin: '0 16px', padding: '10px 10px 10px 10px' }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: '',
          }}
        >
          GONGZONE ©2022 Created by GONGZONE TEAM
        </Footer>
      </Layout>
    </Layout>
  );
};

export default StaffLayout;
