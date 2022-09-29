import React, { useEffect } from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Modal,
  Select,
} from 'antd';
import { Link, useParams } from 'react-router-dom';
const { TextArea } = Input;
const { Option } = Select;
function AdminStockUpdate({
  data,
  changePageHandler,
  storageList,
  storageInputHandler,
  onChangeInputHandler,
  updateStock,
  dataInsert,
}) {
  useEffect(() => {
    dataInsert();
  }, []);
  return (
    <>
      {data || storageList ? (
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
              재고 상세정보
            </Typography.Title>
            <Form.Item label="재고코드">
              <Input disabled={true} name="stockId" value={data.stockId} />
            </Form.Item>
            <Form.Item
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
                name="stockName"
                placeholder="재고 상품명"
                defaultValue={data.stockName}
                onChange={(e) => onChangeInputHandler('stockName', e)}
              />
            </Form.Item>
            <Form.Item
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
                name="stockQuantity"
                placeholder="재고 수량"
                defaultValue={data.stockQuantity}
                onChange={(e) =>
                  onChangeInputHandler('stockQuantity', {
                    target: { value: e },
                  })
                }
              />
            </Form.Item>
            <Form.Item label="비고">
              <TextArea
                name="stockDescription"
                defaultValue={data.stockDescription}
                onChange={(e) => onChangeInputHandler('stockDescription', e)}
                showCount
                maxLength={1000}
                rows={5}
                placeholder="비고"
              />
            </Form.Item>

            <Form.Item
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
                name="storage"
                defaultValue={data.storage.storageId}
                onChange={(e) => storageInputHandler('storageId', e)}
              >
                {storageList.map((data) => (
                  <Option key={data.storageId} value={data.storageId}>
                    {data.storageAddress}({data.storageId})
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
                style={{
                  margin: 5,
                  backgroundColor: '#FEB139',
                  border: '#FEB139',
                }}
                onClick={() => {
                  updateStock();
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
              onClick={() => changePageHandler()}
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
export default AdminStockUpdate;
