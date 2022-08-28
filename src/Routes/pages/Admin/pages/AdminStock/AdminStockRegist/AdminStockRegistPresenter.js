import React from 'react';
import { Form, Button, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

function AdminStockRegistPresenter({
  registStock,
  stock,
  storageIdInputHandler,
  onChangeInputHandler,
}) {
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
          재고 등록
        </Typography.Title>

        <Form.Item
          name="stockName"
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
          <Input
            onChange={(e) => onChangeInputHandler('stockName', e)}
            placeholder="재고 상품명"
          />
        </Form.Item>
        <Form.Item
          name="stockQuantity"
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
          <Input
            onChange={(e) => onChangeInputHandler('stockQuantity', e)}
            placeholder="재고 수량"
          />
        </Form.Item>
        <Form.Item name="stockDescription" label="비고">
          <Input
            onChange={(e) => onChangeInputHandler('stockDescription', e)}
            placeholder="비고"
          />
        </Form.Item>

        <Form.Item
          name="storageId"
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
          <Input
            onChange={(e) => storageIdInputHandler('storageId', e)}
            placeholder="창고"
          />
        </Form.Item>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Item>
          <Link to="/admin/stock/list">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
              onClick={registStock}
            >
              등록
            </Button>
          </Link>
        </Form.Item>

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
    </div>
  );
}

export default AdminStockRegistPresenter;
