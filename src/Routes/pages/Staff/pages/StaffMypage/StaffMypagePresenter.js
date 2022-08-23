import React from 'react';
import { Image, Descriptions, Col, Row } from 'antd';
import Profile from 'assets/test.png';

const StaffMypagePresenter = ({ mypage }) => {
  return (
    <>
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
