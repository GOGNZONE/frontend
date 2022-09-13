import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

function StaffStorageInfoPresenter({ data }) {
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={8}>
            <Col flex={4}>
              <Descriptions title="창고 상세 정보" bordered>
                <Descriptions.Item label="창고 코드" span={2}>
                  {data.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="창고 주소">
                  {data.storageAddress}
                </Descriptions.Item>
                <Descriptions.Item label="창고 유형" span={2}>
                  {data.storageCategory}
                </Descriptions.Item>
                <Descriptions.Item label="비고" span={3}>
                  {data.storageDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/staff/storage/list">
              <Button
                type="primary"
                style={{
                  margin: 5,
                  backgroundColor: '#293462',
                  border: '#293462',
                }}
              >
                목록
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h2>불러오는 중...</h2>
        </div>
      )}
    </>
  );
}

export default StaffStorageInfoPresenter;
