import React from 'react';
import { Typography, Form, Input, Button, InputNumber, Select } from 'antd';
import { Link } from 'react-router-dom';

function AdminStockRegistPresenter({
  registStock,
  storageList,
  storageInputHandler,
  onChangeInputHandler,
}) {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <>
      {storageList ? (
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
              재고 등록
            </Typography.Title>

            <Form.Item
              name="stockName"
              label="재고 상품명"
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
                onChange={(e) => onChangeInputHandler('stockName', e)}
                placeholder="재고 상품명"
              />
            </Form.Item>
            <Form.Item
              name="stockQuantity"
              label="재고 수량"
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
                  onChangeInputHandler('stockQuantity', {
                    target: { value: e },
                  })
                }
                placeholder="재고 수량"
              />
            </Form.Item>
            <Form.Item
              name="storageId"
              label="창고"
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
                onChange={(e) => storageInputHandler('storageId', e)}
                placeholder="창고"
              >
                {storageList.map((data) => (
                  <Option key={data.storageId} value={data.storageId}>
                    {data.storageAddress}({data.storageId})
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="stockDescription" label="비고">
              <TextArea
                onChange={(e) => onChangeInputHandler('stockDescription', e)}
                placeholder="비고"
              />
            </Form.Item>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={registStock}
                style={{ marginRight: 15 }}
              >
                등록
              </Button>
            </Form.Item>

            <Link to="/admin/stock/list">
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

export default AdminStockRegistPresenter;
