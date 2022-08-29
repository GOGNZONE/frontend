import React from 'react';
import { Form, Button, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

function AdminStorageInfoPresenter({
  onChangeHandler,
  changePageHandler,
  onChangeInputHandler,
  updateStorageHandler,
  data,
}) {
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
          창고 상세정보
        </Typography.Title>
        <Form.Item label="창고코드">
          <Input disabled={true} value={data.storageId} />
        </Form.Item>
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
          <Input
            name="storageAddress"
            defaultValue={data.storageAddress}
            onChange={(e) => onChangeInputHandler('storageAddress', e)}
          />
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
          <Input
            name="storageCategory"
            onChange={(e) => onChangeInputHandler('storageCategory', e)}
            defaultValue={data.storageCategory}
          />
        </Form.Item>
        <Form.Item label="비고">
          <TextArea
            name="storageDescription"
            onChange={(e) => onChangeInputHandler('storageDescription', e)}
            defaultValue={data.storageDescription}
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
            onClick={() => {
              changePageHandler();
              updateStorageHandler();
            }}
          >
            수정
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
            목록
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminStorageInfoPresenter;
