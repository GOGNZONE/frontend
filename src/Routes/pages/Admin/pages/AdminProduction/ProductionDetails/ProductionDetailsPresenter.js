import React from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  DatePicker,
  Upload,
  Space,
  Modal,
} from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { confirm } = Modal;
const { Option } = Select;

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
  <Select defaultValue="mm" className="standard-select-after">
    <Option value="mm">mm</Option>
    <Option value="cm">cm</Option>
  </Select>
);

const ProductionDetailsPresenter = ({
  componentDisabled,
  setComponentDisabled,
  onFormLayoutChange,
  production,
  productionIdParams,
  putProductionApi,
  onChange,
  updateButton,
  onButtonNameChange,
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
        생산 상세정보
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
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item label="생산코드">
          <Input disabled={true} value={production.productionId} />
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
          <Input
            name="productionName"
            placeholder="생산 제품명"
            value={production.productionName}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="브랜드">
          <Input
            name="productionBrandName"
            placeholder="생산 제품 브랜드명"
            value={production.productionBrandName}
            onChange={onChange}
          />
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
        >
          <InputNumber
            min={0}
            style={{
              width: '100%',
            }}
            placeholder="생산 제품 단가"
            formatter={(value) =>
              `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
            value={production.productionPrice}
            onChange={inputNumberOnChangeHandler('productionPrice')}
          />
        </Form.Item>
        <Form.Item
          label="제품수량/단위"
          rules={[
            {
              required: true,
              message: '제품 수량을 입력해주세요!',
            },
          ]}
          required
          tooltip="제품 수량은 필수 입력 필드입니다"
        >
          <Space>
            <InputNumber
              min={1}
              style={{
                width: '100%',
              }}
              placeholder="생산 제품 수량"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\\s?|(,*)/g, '')}
              value={production.productionQuantity}
              onChange={inputNumberOnChangeHandler('productionQuantity')}
            />
            <Input
              name="productionUnit"
              placeholder="ex. mm, cm, yd, ..."
              value={production.productionUnit}
              onChange={onChange}
            />
          </Space>
        </Form.Item>
        <Form.Item label="규격">
          <Input
            name="productionStandard"
            addonAfter={standardSelectAfter}
            placeholder="생산 제품 규격"
            value={production.productionStandard}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="비고">
          <TextArea
            name="productionDescription"
            showCount
            maxLength={1000}
            rows={5}
            placeholder="생산 제품 비고"
            value={production.productionDescription}
            onChange={onChange}
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
          <DatePicker
            placeholder="제품 출고 일자"
            value={
              production.productionReleasedDate
                ? moment(production.productionReleasedDate)
                : undefined
            }
            onChange={datePickerOnChangeHandler('productionReleasedDate')}
          />
        </Form.Item>
        <Form.Item label="생성일자">
          <DatePicker
            placeholder="제품 생성 일자"
            value={
              production.productionDate
                ? moment(production.productionDate)
                : undefined
            }
            disabled={true}
          />
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
              putProductionApi(productionIdParams, production);
              onButtonNameChange();
            }}
          >
            {updateButton ? '수정' : '확인'}
          </Button>
        </Form.Item>
        <Button
          type="primary"
          style={{
            margin: 5,
            backgroundColor: '#D61C4E',
            border: '#D61C4E',
          }}
          onClick={showDeleteConfirm}
        >
          삭제
        </Button>
        <Link to="/admin/production/list">
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

export default ProductionDetailsPresenter;
