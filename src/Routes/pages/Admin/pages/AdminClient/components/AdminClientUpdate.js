import React from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  DatePicker,
  Spin,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import Swal from 'sweetalert2';

const AdminClientUpdate = ({
  clientInfo,
  loading,
  error,
  setPage,
  onChangeHandler,
  onUpdateHandler,
  onResetHandler,
}) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!clientInfo) return null;
  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        거래처 정보 수정
      </Typography.Title>
      {clientInfo ? (
        <>
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
              label="거래처 이름"
              rules={[
                {
                  required: true,
                  message: '거래처 이름을 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="clientName"
                placeholder="거래처 이름"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="주소"
              rules={[
                {
                  required: true,
                  message: '주소를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="clientAddress"
                placeholder="주소"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="거래처 담당자"
              rules={[
                {
                  required: true,
                  message: '거래처 담당자를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="clientManager"
                placeholder="거래처 담당자"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="전화번호"
              rules={[
                {
                  required: true,
                  message: '전화번호를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="clientTel"
                placeholder="전화번호"
                onChange={onChangeHandler}
              />
            </Form.Item>

            <Form.Item label="거래처 관련 파일" valuePropName="fileList">
              <Upload maxCount={1}>
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
                  onUpdateHandler();
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
                onResetHandler();
                setPage(true);
              }}
            >
              취소
            </Button>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AdminClientUpdate;
