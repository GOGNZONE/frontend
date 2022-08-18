import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Avatar } from 'antd';

const { Header } = Layout;

const AdminHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: '0px 30px' }}>
      <div style={{ float: 'left' }}>
        <h1>{/* {pageTitle} */}Title</h1>
      </div>
      <div style={{ float: 'right' }}>
        <>
          <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '20px' }}>
            {/* {manager_nm} */}
            STAFF
          </span>
          <span
            className="site-header-logout"
            //   onClick={logout}
          >
            로그아웃
          </span>
        </>
      </div>
    </Header>
  );
};

export default AdminHeader;
