import React, { useState } from 'react';
import { Image, Descriptions, Col, Row, Spin, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AdminOrderInfoPresenter({ changePageHandler }) {
  return (
    <>
      <Row align="middle" gutter={8}>
        <Col flex={4}>
          <Descriptions title="발주 상세 정보" bordered>
            <Descriptions.Item label="주문 제품 코드"></Descriptions.Item>
            <Descriptions.Item
              label="주문 제품 명"
              span={2}
            ></Descriptions.Item>
            <Descriptions.Item label="주문 제품 브랜드 명"></Descriptions.Item>
            <Descriptions.Item
              label="주문 제품 단가"
              span={2}
            ></Descriptions.Item>
            <Descriptions.Item
              label="주문 제품 수량"
              span={3}
            ></Descriptions.Item>
            <Descriptions.Item label="주문 제품 규격"></Descriptions.Item>
            <Descriptions.Item label="주문 제품 규격 단위"></Descriptions.Item>
            <Descriptions.Item label="주문 제품 비고"></Descriptions.Item>
            <Descriptions.Item label="주문 생성 일자"></Descriptions.Item>
            <Descriptions.Item label="주문 제품 마감 일자"></Descriptions.Item>
            <Descriptions.Item label="주문 제품 파일">
              창고번호
            </Descriptions.Item>
            <Descriptions.Item label="비고"></Descriptions.Item>
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
        <Link to="/admin/order/list">
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
  );
}

export default AdminOrderInfoPresenter;
