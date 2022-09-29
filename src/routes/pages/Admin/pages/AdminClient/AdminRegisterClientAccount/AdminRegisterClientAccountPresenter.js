import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const AdminRegisterClientAccountPresenter = ({
  accountInfo,
  saveAccount,
  onChangeInputHandler,
  onResetHandler,
}) => {
  const { accountBank, accountNumber, accountDepositor } = accountInfo;

  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        거래처 계좌 등록
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
        onFinish={saveAccount}
        autoComplete="off"
      >
        <Form.Item
          label="은행명"
          name="accountBank"
          rules={[
            {
              required: true,
              message: '은행명을 입력해주세요',
            },
          ]}
          required
        >
          <Input
            placeholder="은행명"
            onChange={(e) => onChangeInputHandler('accountBank', e)}
            value={accountBank}
          />
        </Form.Item>
        <Form.Item
          label="계좌번호"
          name="accountNumber"
          rules={[
            {
              required: true,
              message: '계좌번호를 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="계좌번호"
            onChange={(e) => onChangeInputHandler('accountNumber', e)}
            value={accountNumber}
          />
        </Form.Item>
        <Form.Item
          label="예금주"
          name="accountDepositor"
          rules={[
            {
              required: true,
              message: '예금주를 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="예금주"
            onChange={(e) => onChangeInputHandler('accountDepositor', e)}
            value={accountDepositor}
          />
        </Form.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: '15px' }}
          >
            저장
          </Button>
          <Button type="primary" onClick={onResetHandler} danger>
            취소
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AdminRegisterClientAccountPresenter;
