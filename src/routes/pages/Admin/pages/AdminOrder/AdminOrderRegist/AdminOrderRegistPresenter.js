import React, { useEffect } from 'react';
import {
  DatePicker,
  Form,
  Button,
  Input,
  Typography,
  Select,
  InputNumber,
  Space,
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
function AdminOrderRegistPresenter({
  clientList,
  registOrder,
  onChangeInputHandler,
  clientInputHandler,
  onChangeDatePickerHandler,
  orderIdHandler,
}) {
  const { TextArea } = Input;
  const { Option } = Select;

  useEffect(() => {
    orderIdHandler();
  }, []);
  return (
    <>
      {clientList ? (
        <div>
          <Typography.Title level={3} style={{ margin: 5 }}>
            발주 등록
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
                min={0}
                style={{
                  width: '100%',
                }}
                placeholder="원자재 단가"
                formatter={(value) =>
                  `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                onChange={(e) =>
                  onChangeInputHandler('orderProductionPrice', {
                    target: { value: e },
                  })
                }
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
                style={{
                  width: '100%',
                }}
                onChange={(e) =>
                  onChangeInputHandler('orderProductionQuantity', {
                    target: { value: e },
                  })
                }
                placeholder="주문 수량"
              />
            </Form.Item>

            <Form.Item
              label="상품 규격"
              rules={[
                {
                  required: true,
                  message: '입력해주세요',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다."
            >
              <Space>
                <Input
                  style={{
                    width: '100%',
                  }}
                  onChange={(e) =>
                    onChangeInputHandler('orderProductionStandard', e)
                  }
                  placeholder="주문 상품 규격"
                />
                <Input
                  style={{
                    width: '60%',
                  }}
                  onChange={(e) =>
                    onChangeInputHandler('orderProductionUnit', e)
                  }
                  placeholder="단위"
                />
              </Space>
            </Form.Item>
            <Form.Item name="orderProductionDescription" label="비고">
              <TextArea
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
                  message: '입고일자를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <DatePicker
                style={{
                  width: '100%',
                }}
                placeholder="주문 마감 일자"
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'orderProductionEndDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
              />
            </Form.Item>
            <Form.Item
              name="clientId"
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
                placeholder="거래처"
                onChange={(e) => {
                  clientInputHandler('clientId', e);
                }}
              >
                {clientList.map((data) => (
                  <Option key={data.clientId} value={data.clientId}>
                    {data.clientName}({data.clientId})
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => registOrder()}
                style={{ marginRight: 15 }}
              >
                등록
              </Button>
            </Form.Item>

            <Link to="/admin/order/list">
              <Button type="primary" danger>
                취소
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>data loading...</div>
      )}
    </>
  );
}

export default AdminOrderRegistPresenter;
