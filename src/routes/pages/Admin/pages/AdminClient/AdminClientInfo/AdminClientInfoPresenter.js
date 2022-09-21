import React from 'react';
import { Descriptions, Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading';
import FileDownload from 'components/FileDownload';

const AdminClientInfoPresenter = ({
  clientInfo,
  loading,
  error,
  setPage,
  setChangeClientInfo,
  setChangeClinetAccountInfo,
}) => {
  const navigate = useNavigate();
  const { account } = clientInfo;
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
              <FileDownload file={clientInfo.clientFile} />
            </Descriptions.Item>
            <Descriptions.Item label="자회사 담당자" span={3}>
              {clientInfo.employeeName ? clientInfo.employeeName : '없음'}
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{
              margin: 5,
              backgroundColor: '#5FBC17',
              border: '#5FBC17',
            }}
            onClick={() => setPage('registerAccount')}
          >
            계좌정보를 등록해주세요
          </Button>
        </div>
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
          onClick={() => navigate('/admin/client/list')}
        >
          목록
        </Button>
        <Button
          type="primary"
          style={{
            margin: 5,
            backgroundColor: '#9BA923',
            border: '#293462',
          }}
          onClick={() => {
            setPage('updateInfo');
            setChangeClientInfo(clientInfo);
          }}
        >
          수정
        </Button>
        {account ? (
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#9BA923',
              border: '#293462',
            }}
            onClick={() => {
              setPage('updateAccount');
              setChangeClinetAccountInfo(account);
            }}
          >
            계좌 정보 수정
          </Button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default AdminClientInfoPresenter;
