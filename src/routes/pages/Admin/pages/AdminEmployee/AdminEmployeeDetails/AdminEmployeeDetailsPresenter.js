import React from 'react';
import { Image, Descriptions, Col, Row, Button } from 'antd';
import Profile from 'assets/profile.png';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading';

const AdminEmployeeDetailsPresenter = ({ employee, loading, error }) => {
  const navigate = useNavigate();
  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }}
    >
      <Loading loading={loading} error={error} data={employee} />
    </div>
  ) : (
    <>
      <Row align="middle" gutter={8}>
        <Col>
          <Image
            width={250}
            height={250}
            src={
              employee.employeeImage
                ? `https://gongzone1bucket.s3.ap-northeast-2.amazonaws.com/${employee.employeeImage}`
                : Profile
            }
          />
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
