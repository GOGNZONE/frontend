import React, { useState } from 'react';
import { Image, Descriptions, Col, Row, Spin, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function StaffOrderInfoPresenter({ data }) {
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={8}>
            <Col flex={4}>
              <Descriptions title="발주 상세 정보" bordered>
                <Descriptions.Item label="주문 제품 코드" span={3}>
                  {data.orderId}
                </Descriptions.Item>
                <Descriptions.Item label="주문 제품 명" span={3}>
                  {data.orderProductionName}
                </Descriptions.Item>
                <Descriptions.Item label="브랜드명" span={3}>
                  {data.orderProductionBrandName}
                </Descriptions.Item>
                <Descriptions.Item label="제품 단가" span={2}>
                  {data.orderProductionPrice}
                </Descriptions.Item>
                <Descriptions.Item label="제품 수량">
                  {data.orderProductionQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="제품 규격" span={2}>
                  {data.orderProductionStandard}
                </Descriptions.Item>
                <Descriptions.Item label="규격 단위" span={2}>
                  {data.orderProductionUnit}
                </Descriptions.Item>
                <Descriptions.Item label="주문 생성 일" span={2}>
                  {data.orderDate}
                </Descriptions.Item>
                <Descriptions.Item label="주문 제품 마감 일">
                  {data.orderProductionEndDate}
                </Descriptions.Item>
                <Descriptions.Item label="주문 제품 파일" span={3}>
                  {data.orderProuctionFile}
                </Descriptions.Item>
                <Descriptions.Item label="거래처">
                  {data.client.clientName}({data.client.clientId})
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.orderProductionDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/staff/order/list">
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

export default StaffOrderInfoPresenter;
