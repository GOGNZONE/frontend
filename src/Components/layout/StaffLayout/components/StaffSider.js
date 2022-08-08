import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/staff">마이페이지</Link>, '/staff', <UserOutlined />),
  getItem(
    <Link to="/staff/client">거래처 관리</Link>,
    '/client',
    <UserOutlined />,
  ),
  getItem('상품관리', '/production', <UserOutlined />, [
    getItem(
      <Link to="/staff/production/list">상품 목록</Link>,
      '/staff/production/list',
    ),
    getItem(<Link to="/staff/production">상품 등록</Link>, '/staff/production'),
  ]),
  getItem('재고관리', '/stock', <UserOutlined />, [
    getItem(<Link to="/staff/stock/list">재고 목록</Link>, '/staff/stock/list'),
    getItem(<Link to="/staff/stock">재고 등록</Link>, '/staff/stock'),
  ]),
  getItem('출고 관리', '/release', <UserOutlined />, [
    getItem(
      <Link to="/staff/release/list">출고 목록</Link>,
      '/release/stock/list',
    ),
  ]),
  getItem('BOM 관리', '/bom', <UserOutlined />, [
    getItem(<Link to="/staff/bom/list">BOM 목록</Link>, '/release/bom/list'),
    getItem(<Link to="/staff/bom">BOM 등록</Link>, '/release/bom'),
  ]),
];

const StaffSider = ({ onCollapse, collapsed }) => {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div
        className="logo"
        style={{
          height: '32px',
          margin: '16px',
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        {/* <img src={LOGO} alt="logo" style={{ height: '100%' }} /> */}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default StaffSider;
