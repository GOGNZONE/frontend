import React, { useEffect } from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Modal,
  Select,
} from 'antd';
import { Link, useParams } from 'react-router-dom';
function AdminStockUpdate({ changePageHandler }) {
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
          재고 상세정보
        </Typography.Title>
        <Form.Item label="재고코드">
          <Input disabled={true} name="stockId" />
        </Form.Item>
        <Form.Item
          label="재고 상품명"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="stockName" placeholder="재고 상품명" />
        </Form.Item>
        <Form.Item
          label="재고 수량"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="stockQuantity" placeholder="재고 수량" />
        </Form.Item>
        <Form.Item label="비고">
          <Input name="stockDescription" placeholder="비고" />
        </Form.Item>

        <Form.Item
          label="창고"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Select></Select>
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
              // putProductionApi(productionIdParams, production);
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
export default AdminStockUpdate;
