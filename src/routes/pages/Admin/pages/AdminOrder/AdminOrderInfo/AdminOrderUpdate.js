import React, { useEffect, useState } from 'react';
import {
  Form,
  Upload,
  Button,
  Input,
  Typography,
  InputNumber,
  Modal,
  Select,
  DatePicker,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

function AdminOrderUpdate({
  data,
  changePageHandler,
  onChangeInputHandler,
  clientList,
  onChangeDatePickerHandler,
  clientInputHandler,
  dataInsert,
  onUpdateOrderHandler,
}) {
  const { TextArea } = Input;
  const { confirm } = Modal;
  const { Option, OptGroup } = Select;
  const dateFormat = 'YYYY-MM-DD';

  useEffect(() => {
    dataInsert();
  }, []);

  return (
    <>
      {data || clientList ? (
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
              발주 수정
            </Typography.Title>
            <Form.Item label="주문코드">
              <Input disabled={true} name="orderId" value={data.orderId} />
            </Form.Item>
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
                name="orderProductionName"
                placeholder="주문 상품명"
                onChange={(e) => {
                  onChangeInputHandler('orderProductionName', e);
                }}
                defaultValue={data.orderProductionName}
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
                name="orderProductionBrandName"
                placeholder="주문 상품 브랜드명"
                onChange={(e) => {
                  onChangeInputHandler('orderProductionBrandName', e);
                }}
                defaultValue={data.orderProductionBrandName}
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
                name="orderProductionPrice"
                min={0}
                style={{
                  width: '100%',
                }}
                placeholder="주문 상품 가격"
                formatter={(value) =>
                  `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                onChange={(e) => {
                  onChangeInputHandler('orderProductionPrice', {
                    target: { value: e },
                  });
                }}
                defaultValue={data.orderProductionPrice}
                // onChange={(e) =>
                //   onChangeInputHandler('orderProductionPrice', {
                //     target: { value: e },
                //   })
                // }
              />
            </Form.Item>
            <Form.Item
              label="주문 수량"
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
                style={{
                  width: '100%',
                }}
                name="orderProductionQuantity"
                placeholder="주문 수량"
                onChange={(e) => {
                  onChangeInputHandler('orderProductionQuantity', {
                    target: { value: e },
                  });
                }}
                defaultValue={data.orderProductionQuantity}
              />
            </Form.Item>

            <Form.Item
              label="주문 규격"
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
                style={{
                  width: '100%',
                }}
                name="orderProductionStandard"
                placeholder="주문 규격"
                onChange={(e) => {
                  onChangeInputHandler('orderProductionStandard', {
                    target: { value: e },
                  });
                }}
                defaultValue={data.orderProductionStandard}
              />
            </Form.Item>
            <Form.Item label="비고">
              <TextArea
                name="orderProductionDescription"
                defaultValue={data.orderProductionDescription}
                onChange={(e) =>
                  onChangeInputHandler('orderProductionDescription', e)
                }
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
                  message: '입력해주세요',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다."
            >
              <DatePicker
                style={{
                  width: '100%',
                }}
                placeholder="제품 출고 일자"
                defaultValue={moment(data.orderProductionEndDate)}
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'orderProductionEndDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
              />
            </Form.Item>
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
              <Select
                name="client"
                defaultValue={data.client.clientId}
                onChange={(e) => clientInputHandler('clientId', e)}
              >
                {clientList.map((data) => (
                  <Option key={data.clientId} value={data.clientId}>
                    {data.clientName}({data.clientId})
                  </Option>
                ))}
              </Select>
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
                onClick={() => {
                  onUpdateOrderHandler();
                }}
              >
                수정
              </Button>
            </Form.Item>

            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#293462',
                border: '#293462',
              }}
              onClick={() => {
                changePageHandler();
              }}
            >
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div>data loading...</div>
      )}
    </>
  );
}

export default AdminOrderUpdate;
