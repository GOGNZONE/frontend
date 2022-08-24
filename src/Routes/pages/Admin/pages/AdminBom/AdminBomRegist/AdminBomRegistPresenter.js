import React, { useEffect } from 'react';
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
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
import moment from 'moment';
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
function AdminBomRegistPresenter({
  bom,
  registBom,
  onChangeInputHandler,
  bomParentInputHandler,
  storageInputHandler,
  onChangeDatePickerHandler,
}) {
  const { TextArea } = Input;
  const { confirm } = Modal;
  const { Option, OptGroup } = Select;
  const dateFormat = 'YYYY-MM-DD';
  console.log(bom);
  return (
    <div>
      <Typography.Title level={3} style={{ margin: 5 }}>
        원자재 등록
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
          name="bomName"
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
            onChange={(e) => onChangeInputHandler('bomName', e)}
            placeholder="원자재 제품명"
          />
        </Form.Item>

        <Form.Item name="bomQuantity" label="원자재 재고 수량">
          <Input
            onChange={(e) => onChangeInputHandler('bomQuantity', e)}
            placeholder="원자재 재고 수량"
          />
        </Form.Item>

        <Form.Item
          name="bomPrice"
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
            min={0}
            style={{
              width: '100%',
            }}
            placeholder="원자재 단가"
            formatter={(value) =>
              `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
            onChange={(e) =>
              onChangeInputHandler('bomPrice', { target: { value: e } })
            }
          />
        </Form.Item>

        <Form.Item name="bomStandard" label="원자재 제품 규격">
          <Input
            onChange={(e) => onChangeInputHandler('bomStandard', e)}
            // addonAfter={standardSelectAfter}
            placeholder="원자재 제품 규격"
          />
        </Form.Item>
        <Form.Item name="bomDescription" label="비고">
          <TextArea
            onChange={(e) => onChangeInputHandler('bomDescription', e)}
            showCount
            maxLength={1000}
            rows={5}
            placeholder="비고"
          />
        </Form.Item>
        <Form.Item
          name="bomReceivedDate"
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
            placeholder="원자재 입고 일자"
            onChange={(e) =>
              onChangeDatePickerHandler(
                'bomReceivedDate',
                moment(e).format('YYYY-MM-DD'),
              )
            }
          />
        </Form.Item>

        <Form.Item name="bomId" label="부모ID">
          <Input
            onChange={(e) => bomParentInputHandler('bomId', e)}
            placeholder="부모ID"
          />
        </Form.Item>

        <Form.Item name="storageId" label="창고">
          <Input
            onChange={(e) => storageInputHandler('storageId', e)}
            placeholder="창고"
          />
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
          >
            등록
          </Button>
        </Form.Item>

        <Link to="/staff/bom/list">
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
    </div>
  );
}

export default AdminBomRegistPresenter;
