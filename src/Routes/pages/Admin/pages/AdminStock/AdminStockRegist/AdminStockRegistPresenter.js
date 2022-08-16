import React from 'react';
import { Form, Button, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

function AdminStockRegistPresenter() {
  const insertStock = () => {
    const name = document.getElementById('stockName').value;
    const quantity = document.getElementById('stockQuantity').value;
    const description = document.getElementById('stockDescription').value;
    const storage = document.getElementById('storage').value;
    const data = {
      stockName: name,
      stockQuantity: quantity,
      stockDescription: description,
      storage: {
        storageId: storage,
      },
    };
  };

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
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
      >
        <Typography.Title level={3} style={{ margin: 5 }}>
          재고 등록
        </Typography.Title>

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
          <Input name="창고" placeholder="창고" />
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
          >
            등록
          </Button>
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
