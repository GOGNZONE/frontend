import React, { useEffect } from 'react';
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
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
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
function StaffBomRegistPresenter() {
  const { TextArea } = Input;
  const { confirm } = Modal;
  const { Option, OptGroup } = Select;
  const dateFormat = 'YYYY-MM-DD';
  const addBom = () => {
    const name = document.getElementById('bomName').value;
    const quantity = document.getElementById('bomQuantity').value;
    const price = document.getElementById('bomPrice').value;
    const standard = document.getElementById('bomStandard').value;
    const unit = document.getElementById('bomUnit').value;
    const desc = document.getElementById('bomDescription').value;
    const file = document.getElementById('bomFile').value;
    const storageId = document.getElementById('bomStorage').value;
    const parent = document.getElementById('bomParent').value;
    const bomdata = {
      bomName: name,
      bomQuantity: quantity,
      bomPrice: price,
      bomStandard: standard,
      bomUnit: unit,
      bomDescription: desc,
      bomFile: file,
      storage: {
        storageId: storageId,
      },
      bomParent: {
        bomId: parent,
      },
    };
  };

  return (
    <div>
      <Typography.Title level={3} style={{ margin: 5 }}>
        원자재 상세정보
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
          label="원자재 제품명"
          rules={[
            {
              required: true,
              message: '제품명을 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <Input placeholder="원자재 제품명" />
        </Form.Item>

        <Form.Item label="원자재 재고 수량">
          <Input placeholder="원자재 재고 수량" />
        </Form.Item>

        <Form.Item
          label="원자재 단가"
          rules={[
            {
              required: true,
              message: '단가를 입력해주세요!',
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
            placeholder="원자재 단가"
            formatter={(value) =>
              `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
          />
        </Form.Item>

        <Form.Item label="원자재 제품 규격">
          <Input
            // addonAfter={standardSelectAfter}
            placeholder="원자재 제품 규격"
          />
        </Form.Item>
        <Form.Item label="비고">
          <TextArea showCount maxLength={1000} rows={5} placeholder="비고" />
        </Form.Item>
        <Form.Item
          label="원자재 입고 일자"
          rules={[
            {
              required: true,
              message: '입고일자를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <DatePicker placeholder="원자재 입고 일자" format={dateFormat} />
        </Form.Item>
        <Form.Item label="부모ID">
          <Input placeholder="부모ID" />
        </Form.Item>
        <Form.Item label="창고">
          <Input placeholder="창고" />
        </Form.Item>
        <Form.Item
          label="원자재 관련 파일"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
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
          >
            등록
          </Button>
        </Form.Item>

        <Link to="/staff/bom/list">
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

export default StaffBomRegistPresenter;
