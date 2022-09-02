import React, { useEffect } from 'react';
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
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { confirm } = Modal;
const { Option, OptGroup } = Select;
const dateFormat = 'YYYY-MM-DD';
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

const AdminBomUpdate = ({
  data,
  bomList,
  upBom,
  storageList,
  onChangeInputHandler,
  onChangeSelectHandler,
  storageInputHandler,
  bomParentInputHandler,
  onChangeDatePickerHandler,
  dataInsert,
  changePageHandler,
}) => {
  const initaialdata = '';
  useEffect(() => {
    dataInsert();
  }, []);
  const standardSelectAfter = (
    <Select
      style={{ width: 80 }}
      onChange={(e) => onChangeSelectHandler('bomUnit', e)}
      defaultValue={data.bomUnit}
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
    <>
      {data || bomList || storageList ? (
        <div>
          <Typography.Title level={3} style={{ margin: 5 }}>
            원자재 상세정보
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
              label="원자재 제품 코드"
              rules={[
                {
                  required: true,
                  message: '원자재 코드를 가져올 수 없습니다!',
                },
              ]}
            >
              <Input disabled={true} value={data.bomId} />
            </Form.Item>

            <Form.Item
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
                name="bomName"
                placeholder="원자재 제품명"
                defaultValue={data.bomName}
                onChange={(e) => onChangeInputHandler('bomName', e)}
              />
            </Form.Item>

            <Form.Item
              label="원자재 재고 수량"
              required
              tooltip="필수 입력 필드입니다"
              initialValue={0}
            >
              <InputNumber
                style={{
                  width: '100%',
                }}
                name="bomQuantity"
                placeholder="원자재 재고 수량"
                defaultValue={data.bomQuantity}
                onChange={(e) =>
                  onChangeInputHandler('bomQuantity', { target: { value: e } })
                }
              />
            </Form.Item>

            <Form.Item
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
                name="bomPrice"
                min={0}
                style={{
                  width: '100%',
                }}
                placeholder="원자재 단가"
                formatter={(value) =>
                  `￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                defaultValue={data.bomPrice}
                onChange={(e) =>
                  onChangeInputHandler('bomPrice', { target: { value: e } })
                }
              />
            </Form.Item>

            <Form.Item
              label="원자재 제품 규격"
              required
              tooltip="필수 입력 필드입니다"
            >
              <InputNumber
                style={{
                  width: '100%',
                }}
                name="bomStandard"
                onChange={(e) =>
                  onChangeInputHandler('bomStandard', { target: { value: e } })
                }
                addonAfter={standardSelectAfter}
                defaultValue={data.bomStandard}
                placeholder="원자재 제품 규격"
              />
            </Form.Item>
            <Form.Item label="비고">
              <TextArea
                name="bomDescription"
                defaultValue={data.bomDescription}
                onChange={(e) => onChangeInputHandler('bomDescription', e)}
                showCount
                maxLength={1000}
                rows={5}
                placeholder="비고"
              />
            </Form.Item>
            <Form.Item
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
                style={{
                  width: '100%',
                }}
                placeholder="제품 출고 일자"
                defaultValue={moment(data.bomReceivedDate)}
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'bomReceivedDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
              />
            </Form.Item>
            <Form.Item label="부모ID">
              <Select
                name="bom"
                defaultValue={
                  data.bomParent
                    ? data.bomParent.bomId
                    : (data.bomParent = initaialdata)
                }
                onChange={(e) => bomParentInputHandler('bomId', e)}
              >
                {bomList.map((data) => (
                  <Option key={data.bomId} value={data.bomId}>
                    {data.bomName}({data.bomId})
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="창고" required tooltip="필수 입력 필드입니다">
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
                onClick={upBom}
              >
                수정
              </Button>
            </Form.Item>
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#D61C4E',
                border: '#D61C4E',
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
};
export default AdminBomUpdate;
