import React from 'react';
import { Form, Button, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

function StaffStorageInfoPresenter({
  storageInfo,
  componentDisabled,
  setComponentDisabled,
  onFormLayoutChange,
  onChange,
  updateButton,
  onButtonNameChange,
}) {
  console.log(storageInfo);
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
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Typography.Title level={3} style={{ margin: 5 }}>
          창고 상세정보
        </Typography.Title>
        <Form.Item label="창고코드">
          <Input
            disabled={true}
            name="storageId"
            value={storageInfo.storageId}
          />
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
            onChange={onChange}
            value={storageInfo.storageAddress}
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
            onChange={onChange}
            value={storageInfo.storageCategory}
          />
        </Form.Item>
        <Form.Item label="비고">
          <Input
            name="storageDescription"
            onChange={onChange}
            value={storageInfo.storageDescription}
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
              setComponentDisabled(!componentDisabled);
              // putProductionApi(storageIdParams, storage);
              onButtonNameChange();
            }}
          >
            {updateButton ? '수정' : '확인'}
          </Button>
        </Form.Item>
        {/* <Button
    type="primary"
    style={{
      margin: 5,
      backgroundColor: '#D61C4E',
      border: '#D61C4E',
    }}
    onClick={showDeleteConfirm}
  >
    삭제
  </Button> */}
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

export default StaffStorageInfoPresenter;
