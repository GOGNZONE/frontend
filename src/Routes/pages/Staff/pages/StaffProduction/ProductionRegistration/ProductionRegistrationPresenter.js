import React from 'react';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
  InputNumber,
  Select,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const standardSelectAfter = (
  <Select defaultValue="mm" className="standard-select-after">
    <Option value="mm">mm</Option>
    <Option value="cm">cm</Option>
  </Select>
);

const unitSelectAfter = (
  <Select defaultValue="kg" className="unit-select-after">
    <Option value="kg">kg</Option>
    <Option value="g">g</Option>
  </Select>
);

const ProductionRegistrationPresenter = () => {
  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        생산 등록
      </Typography.Title>
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
        <Form.Item
          label="생산코드"
          rules={[
            {
              required: true,
              message: '생산코드를 가져올 수 없습니다!',
            },
          ]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          label="생산품목"
          rules={[
            {
              required: true,
              message: '제품명을 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <Input placeholder="생산 제품명" />
        </Form.Item>
        <Form.Item label="브랜드">
          <Input placeholder="생산 제품 브랜드명" />
        </Form.Item>
        <Form.Item
          label="단가"
          rules={[
            {
              required: true,
              message: '제품 단가를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
          initialValue={0}
        >
          <InputNumber
            min={0}
            style={{
              width: '100%',
            }}
            placeholder="생산 제품 단가"
            formatter={(value) =>
              `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item
          label="제품수량"
          rules={[
            {
              required: true,
              message: '제품 수량을 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <InputNumber
            min={1}
            style={{
              width: '100%',
            }}
            placeholder="생산 제품 수량"
            addonAfter="개"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item label="규격">
          <Input
            addonAfter={standardSelectAfter}
            placeholder="생산 제품 규격"
          />
        </Form.Item>
        <Form.Item label="단위">
          <Input
            addonAfter={unitSelectAfter}
            placeholder="생산 제품 규격 단위"
          />
        </Form.Item>
        <Form.Item label="비고">
          <TextArea
            showCount
            maxLength={1000}
            rows={5}
            placeholder="생산 제품 비고"
          />
        </Form.Item>
        <Form.Item
          label="출고일자"
          rules={[
            {
              required: true,
              message: '출고일자를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <DatePicker placeholder="제품 출고 일자" />
        </Form.Item>
        <Form.Item
          label="생성일자"
          rules={[
            {
              required: true,
              message: '제품 생성일자를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <DatePicker placeholder="제품 생성 일자" />
        </Form.Item>
        <Form.Item
          label="파일"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>
        </Form.Item>
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
          <Link to="/staff/production/list">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#D61C4E',
                border: '#D61C4E',
              }}
            >
              취소
            </Button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default ProductionRegistrationPresenter;
