import React, { useCallback } from 'react';
import { Typography, Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

function AdminStorageRegistPresenter({ registStorage, onChangeInputHandler }) {
  const { TextArea } = Input;
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
          name="storageAddress"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input onChange={(e) => onChangeInputHandler('storageAddress', e)} />
        </Form.Item>
        <Form.Item
          label="창고 종류"
          name="storageCategory"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input onChange={(e) => onChangeInputHandler('storageCategory', e)} />
        </Form.Item>
        <Form.Item name="storageDescription" label="비고">
          <TextArea
            onChange={(e) => onChangeInputHandler('storageDescription', e)}
            showCount
            maxLength={1000}
            rows={5}
            placeholder="비고"
          />
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
            onClick={registStorage}
          >
            등록
          </Button>
        </Form.Item>

        <Link to="/admin/storage/list">
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#293462',
              border: '#293462',
            }}
          >
            취소
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminStorageRegistPresenter;
