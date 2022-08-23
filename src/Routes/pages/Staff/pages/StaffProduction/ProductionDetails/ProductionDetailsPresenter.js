import React, { useCallback } from 'react';
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
  Spin,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

const ProductionDetailsPresenter = ({
  componentDisabled,
  setComponentDisabled,
  onFormLayoutChange,
  data,
  updateButton,
  onButtonNameChange,
  loading,
  onClickHandler,
  productionValue,
  onChangeHandler,
}) => {
  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...productionValue,
      [name]: value,
    });
  });

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChangeHandler({
      ...productionValue,
      [name]: value,
    });
  });

  console.log(loading);
  console.log(data);

  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        생산 상세정보
      </Typography.Title>
      <Spin spinning={loading && !data}>
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
            <Input disabled={true} value={data ? data.productionId : ''} />
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
              defaultValue={data ? data.productionName : ''}
              onChange={(e) => onChangeInputHandler('productionName', e)}
            />
          </Form.Item>
          <Form.Item label="브랜드">
            <Input
              name="productionBrandName"
              placeholder="생산 제품 브랜드명"
              defaultValue={data ? data.productionBrandName : ''}
              onChange={(e) => onChangeInputHandler('productionBrandName', e)}
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
              defaultValue={data ? data.productionPrice : ''}
              onChange={(e) => {
                onChangeInputHandler('productionPrice', {
                  target: { value: e },
                });
              }}
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
                defaultValue={data ? data.productionQuantity : ''}
                onChange={(e) =>
                  onChangeInputHandler('productionQuantity', {
                    target: { value: e },
                  })
                }
              />
              <Input
                name="productionUnit"
                placeholder="ex. mm, cm, yd, ..."
                defaultValue={data ? data.productionUnit : ''}
                onChange={(e) => onChangeInputHandler('productionUnit', e)}
              />
            </Space>
          </Form.Item>
          <Form.Item label="규격">
            <Input
              name="productionStandard"
              addonAfter={standardSelectAfter}
              placeholder="생산 제품 규격"
              defaultValue={data ? data.productionStandard : ''}
              onChange={(e) => onChangeInputHandler('productionStandard', e)}
            />
          </Form.Item>
          <Form.Item label="비고">
            <TextArea
              name="productionDescription"
              showCount
              maxLength={1000}
              rows={5}
              placeholder="생산 제품 비고"
              defaultValue={data ? data.productionDescription : ''}
              onChange={(e) => onChangeInputHandler('productionDescription', e)}
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
              defaultValue={
                data
                  ? data.productionReleasedDate
                    ? moment(data.productionReleasedDate)
                    : undefined
                  : ''
              }
              onChange={(e) =>
                onChangeDatePickerHandler(
                  'productionReleasedDate',
                  moment(e).format('YYYY-MM-DD'),
                )
              }
            />
          </Form.Item>
          <Form.Item label="생성일자">
            <DatePicker
              placeholder="제품 생성 일자"
              defaultValue={
                data
                  ? data.productionDate
                    ? moment(data.productionDate)
                    : undefined
                  : ''
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
      </Spin>
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
              onButtonNameChange();
              onClickHandler();
            }}
          >
            {updateButton ? '수정' : '확인'}
          </Button>
        </Form.Item>
        <Link to="/staff/production/list">
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
