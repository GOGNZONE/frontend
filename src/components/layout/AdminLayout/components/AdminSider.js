import React from 'react';
import { Layout, Menu } from 'antd';
import {
  RocketOutlined,
  TeamOutlined,
  DropboxOutlined,
  InboxOutlined,
  PhoneOutlined,
  CloudServerOutlined,
  CalendarOutlined,
  AndroidOutlined,
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
  getItem(<Link to="/admin">대시보드</Link>, '/admin', <CalendarOutlined />),
  getItem('사원 관리', '/employee', <AndroidOutlined />, [
    getItem(
      <Link to="/admin/employee/list">사원 목록</Link>,
      '/admin/employee/list',
    ),
    getItem(<Link to="/admin/employee">사원 등록</Link>, '/admin/employee'),
    getItem(
      <Link to="/admin/retired-employee/list">퇴사자 목록</Link>,
      '/admin/retired-employee/list',
    ),
  ]),
  getItem('거래처 관리', '/client', <TeamOutlined />, [
    getItem(
      <Link to="/admin/client/list">거래처 목록</Link>,
      '/admin/client/list',
    ),
    getItem(<Link to="/admin/client">거래처 등록</Link>, '/admin/client'),
  ]),
  getItem('생산 관리', '/production', <DropboxOutlined />, [
    getItem(
      '시작전/진행중',
      'g1',
      null,
      [
        getItem(
          <Link to="/admin/production/list">생산 목록</Link>,
          '/admin/production/list',
        ),
        getItem(
          <Link to="/admin/production">생산 등록</Link>,
          '/admin/production',
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
          <Link to="/admin/production/list-completed">생산 목록</Link>,
          '/admin/production/list-completed',
        ),
      ],
      'group',
    ),
  ]),
  getItem('출고 관리', '/release', <RocketOutlined />, [
    getItem(
      <Link to="/admin/release/list">출고 목록</Link>,
      '/release/stock/list',
    ),
    getItem(<Link to="/admin/release">출고 등록</Link>, '/release/stock'),
  ]),
  getItem('재고 관리', '/stock', <InboxOutlined />, [
    getItem(<Link to="/admin/stock/list">재고 목록</Link>, '/admin/stock/list'),
    getItem(<Link to="/admin/stock">재고 등록</Link>, '/admin/stock'),
  ]),
  getItem('발주 관리', '/order', <PhoneOutlined />, [
    getItem(
      <Link to="/admin/order/list">발주 목록</Link>,
      '/release/order/list',
    ),
    getItem(<Link to="/admin/order">발주 등록</Link>, '/release/order'),
  ]),
  getItem('창고 관리', '/storage', <CloudServerOutlined />, [
    getItem(
      <Link to="/admin/storage/list">창고 목록</Link>,
      '/release/storage/list',
    ),
    getItem(<Link to="/admin/storage">창고 등록</Link>, '/release/storage'),
  ]),
];

const AdminSider = ({ onCollapse, collapsed }) => {
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
          marginLeft: '25px',
          marginTop: '22px',
          color: 'white',
          fontSize: 15,
        }}
      >
        MEMU
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

export default AdminSider;
