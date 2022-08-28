import React from 'react';
import { Typography, Input, Button, Modal, Spin, Descriptions } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { confirm } = Modal;

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

const ProductionDetailsPresenter = ({ data, loading, setSwitchToEditPage }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          생산 상세정보
        </Typography.Title>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: 5,
              backgroundColor: '#FEB139',
              border: '#FEB139',
            }}
            onClick={() => setSwitchToEditPage(false)}
          >
            수정
          </Button>
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#D61C4E',
              border: '#D61C4E',
            }}
            onClick={showDeleteConfirm}
          >
            삭제
          </Button>
          <Link to="/admin/production/list">
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

      <Spin
        tip="Loading..."
        spinning={loading && !data}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {data ? (
          <Descriptions
            bordered
            labelStyle={{ width: '140px', height: '80px', fontSize: '15px' }}
            contentStyle={{ width: '160px', fontSize: '15px' }}
          >
            <Descriptions.Item label="생산코드">
              {data.productionId}
            </Descriptions.Item>
            <Descriptions.Item label="생산품목">
              {data.productionName}
            </Descriptions.Item>
            <Descriptions.Item label="브랜드">
              {data.productionBrandName}
            </Descriptions.Item>
            <Descriptions.Item label="단가">
              {data.productionPrice}
            </Descriptions.Item>
            <Descriptions.Item label="제품수량/단위" span={2}>
              {data.productionQuantity}
              {data.productionUnit}
            </Descriptions.Item>
            <Descriptions.Item label="규격" span={3}>
              {data.productionStandard}
            </Descriptions.Item>
            <Descriptions.Item label="생성일자">
              {data.productionDate}
            </Descriptions.Item>
            <Descriptions.Item label="출고일자" span={2}>
              {data.productionReleasedDate}
            </Descriptions.Item>
            <Descriptions.Item label="거래처코드" span={3}>
              {data.client.clientName + '(' + data.client.clientId + ')'}
            </Descriptions.Item>
            <Descriptions.Item label="비고">
              {data.productionDescription}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionDetailsPresenter;
