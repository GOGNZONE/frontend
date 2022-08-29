import React, { useState } from 'react';
import { Form, Upload, Button, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AdminOrderUpdate({ changePageHandler }) {
  return (
    <div>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        size="large"
      >
        <Typography.Title level={3} style={{ margin: 5 }}>
          발주 수정
        </Typography.Title>
        <Form.Item label="주문코드">
          <Input disabled={true} name="orderId" />
        </Form.Item>
        <Form.Item
          label="주문 상품명"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderProductionName" placeholder="주문 상품명" />
        </Form.Item>
        <Form.Item
          label="주문 상품 브랜드명"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input
            name="orderProductionBrandName"
            placeholder="주문 상품 브랜드명"
          />
        </Form.Item>
        <Form.Item
          label="주문 상품 가격"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderProductionPrice" placeholder="주문 상품 가격" />
        </Form.Item>
        <Form.Item
          label="주문 수량"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderProductionQuantity" placeholder="주문 수량" />
        </Form.Item>

        <Form.Item
          label="주문 규격"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderProductionStandard" placeholder="주문 규격" />
        </Form.Item>
        <Form.Item label="비고">
          <Input name="orderProductionDescription" placeholder="비고" />
        </Form.Item>
        <Form.Item
          label="주문 마감 일자"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderProductionEndDate" placeholder="주문 마감 일자" />
        </Form.Item>
        <Form.Item
          label="주문일"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderDate" placeholder="주문일" />
        </Form.Item>
        <Form.Item
          label="거래처"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="client" placeholder="거래처" />
        </Form.Item>
        <Form.Item label="주문 파일">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>
        </Form.Item>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: 5,
              backgroundColor: '#FEB139',
              border: '#FEB139',
            }}
            onClick={() => {
              changePageHandler();
            }}
          >
            수정
          </Button>
        </Form.Item>

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
    </div>
  );
}

export default AdminOrderUpdate;
