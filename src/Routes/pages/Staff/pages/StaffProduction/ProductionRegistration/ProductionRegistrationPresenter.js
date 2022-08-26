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
  message,
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

const ProductionRegistrationPresenter = ({
  productionValue,
  onChangeHandler,
  onClickHandler,
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

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name}이 성공적으로 등록되었습니다.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name}이 업로드에 실패했습니다.`);
      }

      onChangeHandler({
        ...productionValue,
        productionFile: info.file.name,
      });
    },
  };

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
          name="productionName"
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
            placeholder="생산 제품명"
            onChange={(e) => onChangeInputHandler('productionName', e)}
          />
        </Form.Item>
        <Form.Item label="브랜드">
          <Input
            name="productionBrandName"
            placeholder="생산 제품 브랜드명"
            onChange={(e) => onChangeInputHandler('productionBrandName', e)}
          />
        </Form.Item>
        <Form.Item
          name="productionPrice"
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
              `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
            onChange={(e) => {
              onChangeInputHandler('productionPrice', { target: { value: e } });
            }}
          />
        </Form.Item>
        <Form.Item
          name="productionQuantity"
          label="제품수량/단위"
          rules={[
            {
              required: true,
              message: '제품 수량과 단위를 입력해주세요!',
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
              onChange={(e) =>
                onChangeInputHandler('productionQuantity', {
                  target: { value: e },
                })
              }
            />
            <Input
              name="productionUnit"
              placeholder="ex) mm, cm, yd, ..."
              // defaultValue={production.productionUnit}
              onChange={(e) => onChangeInputHandler('productionUnit', e)}
            />
          </Space>
        </Form.Item>
        <Form.Item label="규격">
          <Input
            name="productionStandard"
            addonAfter={standardSelectAfter}
            placeholder="생산 제품 규격"
            // defaultValue={production.productionStandard}
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
            // defaultValue={production.productionDescription}
            onChange={(e) => onChangeInputHandler('productionDescription', e)}
          />
        </Form.Item>
        <Form.Item
          name="productionReleasedDate"
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
            onChange={(e) =>
              onChangeDatePickerHandler(
                'productionReleasedDate',
                moment(e).format('YYYY-MM-DD'),
              )
            }
          />
        </Form.Item>
        <Form.Item
          name="productionDate"
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
            onChange={(e) =>
              onChangeDatePickerHandler(
                'productionDate',
                moment(e).format('YYYY-MM-DD'),
              )
            }
          />
        </Form.Item>
        <Form.Item
          name="fkClientId"
          label="거래처코드"
          rules={[
            {
              required: true,
              message: '거래처 코드를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <Select></Select>
        </Form.Item>
        <Form.Item
          label="파일"
          valuePropName="fileName"
          getValueFromEvent={normFile}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
              onClick={() => onClickHandler()}
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
