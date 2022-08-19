import React, { useCallback } from 'react';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
  InputNumber,
  Select,
  Space,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;

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

const ProductionRegistrationPresenter = ({
  productionLen,
  onChange,
  postProductionApi,
  newProduction,
}) => {
  const onChangeInputNumberHandler = useCallback((name) => (value) => {
    onChange({ name: name, value: value });
  });

  const onChangeDatePickerHandler = useCallback((name) => (e) => {
    onChange({ name: name, value: e });
  });

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
          <Input disabled={true} value={productionLen + 1} />
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
            defaultValue={newProduction.productionName}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="브랜드">
          <Input
            name="productionBrandName"
            placeholder="생산 제품 브랜드명"
            defaultValue={newProduction.productionBrandName}
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
            defaultValue={0}
            min={0}
            style={{
              width: '100%',
            }}
            placeholder="생산 제품 단가"
            formatter={(value) =>
              `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
            onChange={onChangeInputNumberHandler('productionPrice')}
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
              defaultValue={1}
              min={1}
              style={{
                width: '100%',
              }}
              placeholder="생산 제품 수량"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\\s?|(,*)/g, '')}
              onChange={onChangeInputNumberHandler('productionQuantity')}
            />
            <Input
              name="productionUnit"
              placeholder="ex) mm, cm, yd, ..."
              defaultValue={newProduction.productionUnit}
              onChange={onChange}
            />
          </Space>
        </Form.Item>
        <Form.Item label="규격">
          <Input
            name="productionStandard"
            addonAfter={standardSelectAfter}
            placeholder="생산 제품 규격"
            defaultValue={newProduction.productionStandard}
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
            defaultValue={newProduction.productionDescription}
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
            onChange={onChangeDatePickerHandler('productionReleasedDate')}
          />
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
          <DatePicker
            placeholder="제품 생성 일자"
            onChange={onChangeDatePickerHandler('productionDate')}
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
              onClick={() => postProductionApi(newProduction)}
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
