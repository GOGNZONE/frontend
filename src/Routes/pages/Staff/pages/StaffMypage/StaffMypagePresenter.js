import React from 'react';
import { Image, Descriptions, Col, Row, Spin, Button } from 'antd';
import Profile from 'assets/test.png';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const StaffMypagePresenter = ({ mypage, loading, error, setPage }) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!mypage) return null;
  return (
    <>
      <Button type="primary" onClick={() => setPage(false)}>
        정보 수정
      </Button>
      <Row align="middle" gutter={8}>
        <Col>
          <Image width={250} height={250} src={Profile} />
        </Col>
        <Col flex={4}>
          <Descriptions title="마이페이지" bordered>
            <Descriptions.Item label="사번">
              {mypage.employeeId}
            </Descriptions.Item>
            <Descriptions.Item label="이름" span={2}>
              {mypage.employeeName}
            </Descriptions.Item>
            <Descriptions.Item label="연락처">
              {mypage.employeePhone}
            </Descriptions.Item>
            <Descriptions.Item label="입사일자" span={2}>
              {mypage.employeeHiredate}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              {mypage.employeeAddress}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {mypage.employeeEmail}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(StaffMypagePresenter);