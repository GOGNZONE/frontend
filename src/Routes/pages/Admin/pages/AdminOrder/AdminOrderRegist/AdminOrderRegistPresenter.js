import React from 'react';
import {
  DatePicker,
  Form,
  Upload,
  Button,
  Input,
  Typography,
  Select,
  InputNumber,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
function AdminOrderRegistPresenter({
  order,
  registOrder,
  onChangeInputHandler,
  clientInputHandler,
  onChangeSelectHandler,
  onChangeDatePickerHandler,
}) {
  const { TextArea } = Input;
  const { Option, OptGroup } = Select;

  const standardSelectAfter = (
    <Select
      onChange={(e) => onChangeSelectHandler('orderProductionUnit', e)}
      defaultValue="mm"
      className="standard-select-after"
    >
      <OptGroup label="길이">
        <Option value="mm">mm</Option>
        <Option value="cm">cm</Option>
        <Option value="m">m</Option>
      </OptGroup>
      <OptGroup label="무게">
        <Option value="g">g</Option>
        <Option value="kg">kg</Option>
      </OptGroup>
    </Select>
  );
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
          발주 등록
        </Typography.Title>

        <Form.Item
          label="주문 상품명"
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
            onChange={(e) => onChangeInputHandler('orderProductionName', e)}
            placeholder="주문 상품명"
          />
        </Form.Item>
        <Form.Item
          label="주문 상품 브랜드명"
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
            onChange={(e) =>
              onChangeInputHandler('orderProductionBrandName', e)
            }
            placeholder="주문 상품 브랜드명"
          />
        </Form.Item>
        <Form.Item
          label="주문 상품 가격"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <InputNumber
            style={{ width: 340 }}
            onChange={(e) => onChangeInputHandler('orderProductionPrice', e)}
            placeholder="가격"
          />
        </Form.Item>
        <Form.Item
          label="수량"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <InputNumber
            style={{ width: 340 }}
            onChange={(e) => onChangeInputHandler('orderProductionQuantity', e)}
            placeholder="주문 수량"
          />
        </Form.Item>

        <Form.Item
          label="주문 상품"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <InputNumber
            addonAfter={standardSelectAfter}
            onChange={(e) => onChangeInputHandler('orderProductionStandard', e)}
            placeholder="주문 상품 규격"
          />
        </Form.Item>
        <Form.Item name="orderDescription" label="비고">
          <TextArea
            onChange={(e) => onChangeInputHandler('orderDescription', e)}
            showCount
            maxLength={1000}
            rows={5}
            placeholder="비고"
          />
        </Form.Item>
        <Form.Item
          label="주문 마감 일자"
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
            placeholder="주문 마감 일자"
            onChange={(e) =>
              onChangeDatePickerHandler(
                'orderProductionEndDate',
                moment(e).format('YYYY-MM-DD'),
              )
            }
          />
        </Form.Item>
        {/* <Form.Item
          label="주문일"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Input name="orderDate" placeholder="주문일" />
        </Form.Item> */}
        <Form.Item
          label="거래처"
          rules={[
            {
              required: true,
              message: '입력해주세요',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다."
        >
          <Select></Select>
        </Form.Item>
        <Form.Item label="주문 파일">
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

        <Link to="/admin/order/list">
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#293462',
              border: '#293462',
            }}
            onClick={registOrder}
          >
            목록
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminOrderRegistPresenter;
