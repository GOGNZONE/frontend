import React from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  UserOutlined,
  RocketOutlined,
  TeamOutlined,
  DropboxOutlined,
  InboxOutlined,
  PhoneOutlined,
  CloudServerOutlined,
} from '@ant-design/icons';
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
    <Link to="/staff/client/list">거래처 관리</Link>,
    '/client',
    <TeamOutlined />,
  ),
  getItem('생산 관리', '/staff/production', <DropboxOutlined />, [
    getItem(
      '시작전/진행중',
      'g1',
      null,
      [
        getItem(
          <Link to="/staff/production/list">생산 목록</Link>,
          '/staff/production/list',
        ),
        getItem(
          <Link to="/staff/production">생산 등록</Link>,
          '/staff/production',
        ),
      ],
      'group',
    ),
    getItem(
      '완료',
      'g2',
      null,
      [
        getItem(
          <Link to="/staff/production/list-completed">생산 목록</Link>,
          '/staff/production/list-completed',
        ),
      ],
      'group',
    ),
  ]),
  getItem('재고 관리', '/stock', <InboxOutlined />, [
    getItem(<Link to="/staff/stock/list">재고 목록</Link>, '/staff/stock/list'),
    getItem(<Link to="/staff/stock">재고 등록</Link>, '/staff/stock'),
  ]),
  getItem('출고 관리', '/release', <RocketOutlined />, [
    getItem(
      <Link to="/staff/release/list">출고 목록</Link>,
      '/release/stock/list',
    ),
  ]),
  getItem('발주 관리', '/order', <PhoneOutlined />, [
    getItem(
      <Link to="/staff/order/list">발주 목록</Link>,
      '/release/order/list',
    ),
  ]),
  getItem('창고 관리', '/storage', <CloudServerOutlined />, [
    getItem(
      <Link to="/staff/storage/list">창고 목록</Link>,
      '/release/storage/list',
    ),
    getItem(<Link to="/staff/storage">창고 등록</Link>, '/release/storage'),
  ]),
];

const StaffSider = ({ onCollapse, collapsed, logout }) => {
  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
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
      <Button
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </Button>
    </Sider>
  );
};

export default StaffSider;
