import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import Loading from 'components/Loading';

const AdminUpdateClientAccount = ({
  clientInfo,
  loading,
  error,
  setPage,
  onClientAccountChangeHandler,
  onClientAccountUpdateHandler,
  onClientAccountResetHandler,
}) => {
  const { account } = clientInfo;
  const { accountId } = account;

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
    <div>
      <Typography.Title level={3} style={{ margin: 5 }}>
        거래처 정보 수정
      </Typography.Title>
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
            label="은행명"
            rules={[
              {
                required: true,
                message: '은행명을 입력해주세요!',
              },
            ]}
            required
            tooltip="필수 입력 필드입니다"
          >
            <Input
              name="accountBank"
              placeholder="은행명"
              onChange={onClientAccountChangeHandler}
            />
          </Form.Item>
          <Form.Item
            label="계좌번호"
            rules={[
              {
                required: true,
                message: '계좌번호를 입력해주세요!',
              },
            ]}
            required
            tooltip="필수 입력 필드입니다"
          >
            <Input
              name="accountNumber"
              placeholder="계좌번호"
              onChange={onClientAccountChangeHandler}
            />
          </Form.Item>
          <Form.Item
            label="예금주"
            rules={[
              {
                required: true,
                message: '예금주를 입력해주세요!',
              },
            ]}
            required
            tooltip="필수 입력 필드입니다"
          >
            <Input
              name="accountDepositor"
              placeholder="예금주"
              onChange={onClientAccountChangeHandler}
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
                onClientAccountUpdateHandler(accountId);
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
              onClientAccountResetHandler();
              setPage('info');
            }}
          >
            취소
          </Button>
        </div>
      </>
    </div>
  );
};

export default AdminUpdateClientAccount;
