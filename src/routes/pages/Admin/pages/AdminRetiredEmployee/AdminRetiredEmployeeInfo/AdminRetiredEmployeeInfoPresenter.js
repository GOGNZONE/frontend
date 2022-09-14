import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Descriptions, Col, Row, Button } from 'antd';
import Profile from 'assets/profile.png';
import Loading from 'components/Loading';

const AdminRetiredEmployeeInfoPresenter = ({
  retiredEmployee,
  loading,
  error,
}) => {
  const navigate = useNavigate();

  console.log(retiredEmployee);

  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }}
    >
      <Loading loading={loading} error={error} data={retiredEmployee} />
    </div>
  ) : (
    <>
      <Row align="middle" gutter={8}>
        <Col>
          <Image
            width={250}
            height={250}
            src={
              retiredEmployee.employeeImage
                ? `https://gongzone1bucket.s3.ap-northeast-2.amazonaws.com/${retiredEmployee.employeeImage}`
                : Profile
            }
          />
        </Col>
        <Col flex={4}>
          <Descriptions title="퇴사자 정보" bordered>
            <Descriptions.Item label="사번">
              {retiredEmployee.employeeId}
            </Descriptions.Item>
            <Descriptions.Item label="이름" span={2}>
              {retiredEmployee.employeeName}
            </Descriptions.Item>
            <Descriptions.Item label="연락처">
              {retiredEmployee.employeePhone}
            </Descriptions.Item>
            <Descriptions.Item label="입사일자" span={2}>
              {retiredEmployee.employeeHiredate}
            </Descriptions.Item>
            <Descriptions.Item label="퇴사일자" span={3}>
              {retiredEmployee.employeeRetiredDate}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              {retiredEmployee.employeeAddress}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {retiredEmployee.employeeEmail}
            </Descriptions.Item>
            <Descriptions.Item label="권한">
              {retiredEmployee.employeeRole}
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
          onClick={() => navigate('/admin/retired-employee/list')}
        >
          목록
        </Button>
      </div>
    </>
  );
};

export default AdminRetiredEmployeeInfoPresenter;
