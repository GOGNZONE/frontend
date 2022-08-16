import React from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Modal,
  Select,
  DatePicker,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
function StaffStockInfoPresenter({
  stock,
  componentDisabled,
  setComponentDisabled,
  onFormLayoutChange,
  storageIdParams,
  onChange,
  updateButton,
  onButtonNameChange,
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
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Typography.Title level={3} style={{ margin: 5 }}>
          재고 상세정보
        </Typography.Title>
        <Form.Item label="재고코드">
          <Input disabled={true} name="stockId" value={stock.stockId} />
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
          <Input
            name="stockName"
            placeholder="재고 상품명"
            value={stock.stockName}
            onChange={onChange}
          />
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
          <Input
            name="stockQuantity"
            placeholder="재고 수량"
            value={stock.stockQuantity}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="비고">
          <Input
            name="stockDescription"
            placeholder="비고"
            value={stock.stockDescription}
            onChange={onChange}
          />
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
          <Input
            name="창고"
            placeholder="창고"
            onChange={onChange}
            value={stock.storage}
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
              // putProductionApi(productionIdParams, production);
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

export default StaffStockInfoPresenter;
