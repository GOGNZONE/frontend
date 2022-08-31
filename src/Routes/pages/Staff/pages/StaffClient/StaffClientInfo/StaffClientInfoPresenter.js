import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading';

const StaffClientInfoPresenter = ({ clientInfo, loading, error }) => {
  const navigate = useNavigate();
  const { account } = clientInfo;
  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loading data={(clientInfo, loading, error)} />
    </div>
  ) : (
    <>
      <Row align="middle" gutter={6}>
        <Col flex={4}>
          <Descriptions title="거래처 정보" bordered>
            <Descriptions.Item label="이름">
              {clientInfo.clientName}
            </Descriptions.Item>
            <Descriptions.Item label="담당자" span={2}>
              {clientInfo.clientManager}
            </Descriptions.Item>
            <Descriptions.Item label="연락처">
              {clientInfo.clientTel}
            </Descriptions.Item>
            <Descriptions.Item label="계약일" span={2}>
              {clientInfo.clientRegisteredDate}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              {clientInfo.clientAddress}
            </Descriptions.Item>
            <Descriptions.Item label="거래처 관련 파일" span={3}>
              {/* {clientInfo.employeeEmail} */}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      {account ? (
        <Row align="middle" gutter={6} style={{ marginTop: '20px' }}>
          <Col flex={6}>
            <Descriptions title="거래처 계좌 정보" bordered>
              <Descriptions.Item label="은행" span={2}>
                {clientInfo.account.accountBank}
              </Descriptions.Item>
              <Descriptions.Item label="예금주">
                {clientInfo.account.accountDepositor}
              </Descriptions.Item>
              <Descriptions.Item label="계좌번호">
                {clientInfo.account.accountNumber}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      ) : (
        <Row align="middle" gutter={6} style={{ marginTop: '20px' }}>
          <Col flex={6}>
            <Descriptions title="거래처 계좌 정보" bordered>
              <Descriptions.Item label="은행" span={2}>
                등록 전
              </Descriptions.Item>
              <Descriptions.Item label="예금주">등록 전</Descriptions.Item>
              <Descriptions.Item label="계좌번호">등록 전</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      )}

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Button
          type="primary"
          style={{
            margin: 5,
            backgroundColor: '#293462',
            border: '#293462',
          }}
          onClick={() => navigate('/staff/client/list')}
        >
          목록
        </Button>
      </div>
    </>
  );
};

export default StaffClientInfoPresenter;
