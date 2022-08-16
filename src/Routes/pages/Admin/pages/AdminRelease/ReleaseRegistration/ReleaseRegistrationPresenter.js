import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Form, Input, InputNumber, List } from 'antd';

const { TextArea } = Input;

const ReleaseRegistrationPresenter = ({ release }) => {
  const clientData = [
    {
      title: '거래처코드',
      description: `${release.releaseClientDto.clientId}`,
    },
    {
      title: '거래처명',
      description: `${release.releaseClientDto.clientName}`,
    },
    {
      title: '담당자',
      description: `${release.releaseClientDto.clientManager}`,
    },
    {
      title: '연락처',
      description: `${release.releaseClientDto.clientTel}`,
    },
    {
      title: '주소',
      description: `${release.releaseClientDto.clientAddress}`,
    },
    {
      title: '담당자(자사)',
      description: `${release.releaseClientDto.employeeName}`,
    },
  ];

  const productionData = [
    {
      title: '생산 제품명',
      description: `${release.releaseProductionDto.productionName}`,
    },
    {
      title: '생산 제품 브랜드명',
      description: `${release.releaseProductionDto.productionBrandName}`,
    },
    {
      title: '생산 제품 단가',
      description: `${release.releaseProductionDto.productionPrice}`,
    },
  ];

  const deliveryData = [
    {
      title: '택배 ID',
      description: `${release.deliveryDto.deliveryId}`,
    },
    {
      title: '택배사',
      description: `${release.deliveryDto.deliveryCompanyName}`,
    },
    {
      title: '운송장번호',
      description: `${release.deliveryDto.deliveryTrackingNumber}`,
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title
          level={3}
          style={{
            margin: 5,
          }}
        >
          출고 등록
        </Typography.Title>
        <div style={{ display: 'flex' }}>
          <Link to="/admin/production/list">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#293462',
                border: '#293462',
              }}
            >
              생산 목록
            </Button>
          </Link>
          <Link to="/admin/release/list">
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
      <div>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          size="large"
          style={{
            padding: '30px',
            borderRadius: '10px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Form.Item
              label="출고코드"
              style={{
                width: '50%',
              }}
            >
              <Input disabled={true} value={release.releaseId} />
            </Form.Item>
            <Form.Item
              label="출고일자"
              style={{
                width: '50%',
              }}
            >
              <Input disabled={true} value={release.releaseDate} />
            </Form.Item>
          </div>
          <div style={{ display: 'flex' }}>
            <Form.Item
              label="수량"
              style={{
                width: '50%',
              }}
            >
              <Input disabled={true} value={release.releaseQuantity} />
            </Form.Item>
            <Form.Item
              label="공급가액(합계)"
              style={{
                width: '50%',
              }}
            >
              <InputNumber
                disabled={true}
                formatter={(value) =>
                  `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                value={release.releaseTotalPrice}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </div>
          <div style={{ display: 'flex' }}>
            <Form.Item
              label="출고방식"
              style={{
                width: '50%',
              }}
            >
              <Input disabled={true} value={release.releaseType} />
            </Form.Item>
            <Form.Item
              label="비고"
              style={{
                width: '50%',
              }}
            >
              <TextArea
                disabled={true}
                showCount
                maxLength={1000}
                rows={5}
                value={release.releaseDescription}
              />
            </Form.Item>
          </div>
        </Form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ width: '33%' }}>
            <Typography.Title
              level={4}
              style={{
                margin: 5,
                borderRadius: '5px',
                backgroundColor: '#5A8F7B',
                color: '#fff',
                padding: '4px',
              }}
            >
              거래처정보
            </Typography.Title>
            <List
              itemLayout="horizontal"
              dataSource={clientData}
              renderItem={(item) => (
                <List.Item style={{ marginLeft: '7px' }}>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
          <div style={{ width: '34%' }}>
            <Typography.Title
              level={4}
              style={{
                margin: 5,
                borderRadius: '5px',
                backgroundColor: '#5A8F7B',
                color: '#fff',
                padding: '4px',
              }}
            >
              상품정보
            </Typography.Title>
            <List
              itemLayout="horizontal"
              dataSource={productionData}
              renderItem={(item) => (
                <List.Item style={{ marginLeft: '7px' }}>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
          <div style={{ width: '33%' }}>
            <Typography.Title
              level={4}
              style={{
                margin: 5,
                borderRadius: '5px',
                backgroundColor: '#5A8F7B',
                color: '#fff',
                padding: '4px',
              }}
            >
              택배정보
            </Typography.Title>
            <List
              itemLayout="horizontal"
              dataSource={deliveryData}
              renderItem={(item) => (
                <List.Item style={{ marginLeft: '7px' }}>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleaseRegistrationPresenter;
