import React from 'react';
import { Form, Button, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

function StaffStorageRegistPresenter() {
  const insertStorage = () => {
    const category = document.getElementById('storageCategory').value;
    const address = document.getElementById('storageAddress').value;
    const description = document.getElementById('storageDescription').value;

    const data = {
      storageCategory: category,
      storageAddress: address,
      storageDescription: description,
    };
    console.log(data);
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
      >
        <Typography.Title level={3} style={{ margin: 5 }}>
          창고 등록
        </Typography.Title>
        <Form.Item
          label="창고 주소"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="storageAddress" />
        </Form.Item>
        <Form.Item
          label="창고 종류"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="storageCategory" />
        </Form.Item>
        <Form.Item label="비고">
          <Input name="storageDescription" />
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
    </div>
  );
}

export default StaffStorageRegistPresenter;
