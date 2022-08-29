import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
function AdminStockInfoPresenter({ changePageHandler }) {
  return (
    <>
      <Row align="middle" gutter={8}>
        <Col flex={4}>
          <Descriptions title="재고 정보" bordered>
            <Descriptions.Item label="재고 코드"></Descriptions.Item>
            <Descriptions.Item label="재고 상품명"></Descriptions.Item>
            <Descriptions.Item label="재고 수량" span={2}></Descriptions.Item>
            <Descriptions.Item label="비고"></Descriptions.Item>
          </Descriptions>
          <br />
          <Descriptions title="창고 정보" bordered>
            <Descriptions.Item label="창고 번호"></Descriptions.Item>
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

export default AdminStockInfoPresenter;
