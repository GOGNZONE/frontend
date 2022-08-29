import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function AdminStorageInfoPresenter({ changePageHandler, data }) {
  return (
    <>
      {data ? (
        <>
          <Row align="middle">
            <Col flex={4}>
              <Descriptions title="창고 상세 정보" bordered>
                <Descriptions.Item label="창고 코드">
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
            <Button
              type="primary"
              style={{
                margin: 5,
                border: '#293462',
              }}
              onClick={changePageHandler}
            >
              정보 수정
            </Button>
            <Link to="/admin/storage/list">
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
        <div></div>
      )}
    </>
  );
}

export default AdminStorageInfoPresenter;
