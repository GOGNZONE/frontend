import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
function StaffStockInfoPresenter({ data }) {
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={8}>
            <Col flex={4}>
              <Descriptions title="재고 정보" bordered>
                <Descriptions.Item label="재고 코드">
                  {data.stockId}
                </Descriptions.Item>
                <Descriptions.Item label="재고 상품명">
                  {data.stockName}
                </Descriptions.Item>
                <Descriptions.Item label="재고 수량" span={2}>
                  {data.stockQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.stockDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>

            <Col flex={4}>
              <br />
              <Descriptions title="보관 창고 정보" bordered>
                <Descriptions.Item label="창고 번호">
                  {data.storage.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="창고 주소">
                  {data.storage.storageAddress}
                </Descriptions.Item>
                <Descriptions.Item label="창고 종류">
                  {data.storage.storageCategory}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.storage.storageDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/staff/stock/list">
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

export default StaffStockInfoPresenter;
