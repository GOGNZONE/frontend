import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import Loading from 'components/Loading';
import FileUpload from 'components/FileUpload';

const AdminClientUpdate = ({
  clientInfo,
  loading,
  error,
  setPage,
  onChangeClientInfo,
  onClientInfoChangeHandler,
  onClientInfoUpdateHandler,
  onClientInfoResetHandler,
}) => {
  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }}
    >
      <Loading loading={loading} error={error} data={clientInfo} />
    </div>
  ) : (
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
                defaultValue={clientInfo.clientName}
                onChange={(e) => onClientInfoChangeHandler('clientName', e)}
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
                defaultValue={clientInfo.clientAddress}
                onChange={(e) => onClientInfoChangeHandler('clientAddress', e)}
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
                defaultValue={clientInfo.clientManager}
                onChange={(e) => onClientInfoChangeHandler('clientManager', e)}
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
                defaultValue={clientInfo.clientTel}
                onChange={(e) => onClientInfoChangeHandler('clientTel', e)}
              />
            </Form.Item>

            <Form.Item label="거래처 관련 파일" valuePropName="fileList">
              <FileUpload
                onChangeHandler={onChangeClientInfo}
                preventValue={clientInfo}
                fileName={'clientFile'}
              />
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
                  onClientInfoUpdateHandler();
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
                onClientInfoResetHandler();
                setPage('info');
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
