import React, { useEffect } from 'react';
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
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { confirm } = Modal;
const { Option, OptGroup } = Select;
const dateFormat = 'YYYY-MM-DD';
const showDeleteConfirm = () => {
  confirm({
    title: '해당 제품을 삭제하시겠습니까?',
    icon: <ExclamationCircleOutlined />,
    okText: '확인',
    okType: 'danger',
    cancelText: '취소',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const standardSelectAfter = (
  <Select defaultValue="mm" className="unit-select-after">
    <OptGroup label="길이">
      <Option value="mm">mm</Option>
      <Option value="cm">cm</Option>
      <Option value="cm">m</Option>
    </OptGroup>
    <OptGroup label="무게">
      <Option value="g">g</Option>
      <Option value="kg">kg</Option>
      <Option value="t">t</Option>
    </OptGroup>
  </Select>
);

const unitSelectAfter = (
  <Select defaultValue="kg" className="unit-select-after">
    <Option value="kg">kg</Option>
    <Option value="g">g</Option>
  </Select>
);
const AdminBomUpdate = ({
  data,
  onChange,
  componentDisabled,
  setComponentDisabled,
  onFormLayoutChange,
  onButtonNameChange,
  updateButton,
}) => {
  const inputNumberOnChangeHandler = (name) => (value) => {
    onChange({ name: name, value: value });
  };

  const datePickerOnChangeHandler = (name) => (e) => {
    onChange({ name: name, value: e });
  };
  return (
    <>
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
          label="원자재 제품 코드"
          rules={[
            {
              required: true,
              message: '원자재 코드를 가져올 수 없습니다!',
            },
          ]}
        >
          <Input disabled={true} value={data.bomId} />
        </Form.Item>

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
          <Input
            name="bomName"
            placeholder="원자재 제품명"
            defaultValue={data.bomName}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="원자재 재고 수량">
          <Input
            name="bomQuantity"
            placeholder="원자재 재고 수량"
            defaultValue={data.bomQuantity}
            onChange={onChange}
          />
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
            name="bomPrice"
            min={0}
            style={{
              width: '100%',
            }}
            placeholder="원자재 단가"
            formatter={(value) =>
              `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            defaultValue={data.bomPrice}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="원자재 제품 규격">
          <Input
            name="bomStandard"
            onChange={onChange}
            addonAfter={unitSelectAfter}
            defaultValue={data.bomStandard}
            placeholder="원자재 제품 규격"
          />
        </Form.Item>
        <Form.Item label="비고">
          <TextArea
            name="bomDescription"
            defaultValue={data.bomDescription}
            onChange={onChange}
            showCount
            maxLength={1000}
            rows={5}
            placeholder="비고"
          />
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
          <DatePicker
            placeholder="제품 출고 일자"
            // value={
            //   bom.bomReceivedDate ? moment(bom.bomReceivedDate) : undefined
            // }
            onChange={(e) => datePickerOnChangeHandler('bomReceivedDate')}
          />
        </Form.Item>
        <Form.Item label="부모ID">
          <Select name="bomParent" onChange={onChange} />
        </Form.Item>
        <Form.Item label="창고">
          <Select name="storage" onChange={onChange} />
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
            onClick={() => {
              setComponentDisabled(!componentDisabled);
              // putProductionApi(productionIdParams, production);
              onButtonNameChange();
            }}
          >
            수정
          </Button>
        </Form.Item>
        <Button
          type="primary"
          style={{
            margin: 5,
            backgroundColor: '#D61C4E',
            border: '#D61C4E',
          }}
        >
          삭제
        </Button>
        <Link to="/admin/bom/list">
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
    </>
  );
};
export default AdminBomUpdate;
