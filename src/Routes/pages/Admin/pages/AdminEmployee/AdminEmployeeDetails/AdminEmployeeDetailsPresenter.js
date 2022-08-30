import React from 'react';
import { Image, Descriptions, Col, Row, Spin, Button } from 'antd';
import Profile from 'assets/test.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AdminEmployeeDetailsPresenter = ({ employee, loading, error }) => {
  const navigate = useNavigate();
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!employee) return null;
  return (
    <>
      <Row align="middle" gutter={8}>
        <Col>
          <Image width={250} height={250} src={Profile} />
        </Col>
        <Col flex={4}>
          <Descriptions title="사원 정보" bordered>
            <Descriptions.Item label="사번">
              {employee.employeeId}
            </Descriptions.Item>
            <Descriptions.Item label="이름" span={2}>
              {employee.employeeName}
            </Descriptions.Item>
            <Descriptions.Item label="연락처">
              {employee.employeePhone}
            </Descriptions.Item>
            <Descriptions.Item label="입사일자" span={2}>
              {employee.employeeHiredate}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              {employee.employeeAddress}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {employee.employeeEmail}
            </Descriptions.Item>
            <Descriptions.Item label="권한">
              {employee.employeeRole}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Button
          type="primary"
          style={{
            margin: 5,
            backgroundColor: '#293462',
            border: '#293462',
          }}
          onClick={() => navigate('/admin/employee/list')}
        >
          목록
        </Button>
      </div>
    </>
  );
};

export default AdminEmployeeDetailsPresenter;
