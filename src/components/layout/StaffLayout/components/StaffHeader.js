import React from 'react';
import { Layout } from 'antd';
import logo from 'assets/header_logo.png';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const StaffHeader = ({ logout }) => {
  const navigate = useNavigate();
  return (
    <Header className="site-layout-background" style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span>
            <img src={logo} style={{ width: '200px', height: '27px' }} />
          </span>
        </div>
        <div>
          <div
            style={{
              display: 'inline-block',
              marginRight: '10px',
            }}
          >
            <button
              style={{
                width: '50px',
                height: '30px',
                backgroundColor: '#fff',
                border: 'none',
              }}
              onClick={() => navigate('/admin')}
            ></button>
          </div>
          <span style={{ marginRight: '20px', fontSize: 16 }}>STAFF</span>
          <span
            className="site-header-logout"
            onClick={logout}
            style={{ fontSize: 16 }}
          >
            ๋ก๊ทธ์์
          </span>
        </div>
      </div>
    </Header>
  );
};

export default StaffHeader;
