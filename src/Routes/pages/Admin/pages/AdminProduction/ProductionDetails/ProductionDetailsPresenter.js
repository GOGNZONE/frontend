import React from 'react';
import {
  Typography,
  Button,
  Modal,
  Spin,
  Descriptions,
  Drawer,
  Divider,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { confirm } = Modal;
const { Title, Text } = Typography;

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

const ProductionDetailsPresenter = ({
  data,
  loading,
  setSwitchToEditPage,
  onSetProductionValue,
  showDrawer,
  onClose,
  visible,
}) => {
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
            onClick={() => {
              setSwitchToEditPage(false);
              onSetProductionValue(data);
            }}
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
          <>
            <Descriptions
              bordered
              labelStyle={{ width: '140px', height: '80px', fontSize: '15px' }}
              contentStyle={{ width: '160px', fontSize: '15px' }}
              column={3}
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
              <Descriptions.Item label="제품수량/단위">
                {data.productionQuantity}
                {data.productionUnit}
              </Descriptions.Item>
              <Descriptions.Item label="단가" span={2}>
                {data.productionPrice}
              </Descriptions.Item>
              <Descriptions.Item label="규격" span={3}>
                {data.productionStandard}
              </Descriptions.Item>
              <Descriptions.Item label="생성일자">
                {data.productionDate}
              </Descriptions.Item>
              <Descriptions.Item label="거래처코드" span={2}>
                {data.client.clientName + '(' + data.client.clientId + ')'}
              </Descriptions.Item>
              <Descriptions.Item label="출고일자" span={3}>
                {data.releases.length === 0 ? (
                  <Link to={`/admin/production/release/${data.productionId}`}>
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#293462', border: '#293462' }}
                    >
                      등록
                    </Button>
                  </Link>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {data.releases.map((release) => {
                      return (
                        <div key={release.releaseId}>{release.releaseDate}</div>
                      );
                    })}
                    <Button
                      type="primary"
                      ghost
                      onClick={showDrawer}
                      style={{ marginLeft: 15 }}
                    >
                      조회
                    </Button>
                    {/* Start Drawer */}
                    <Drawer
                      width={500}
                      placement="right"
                      closable={false}
                      onClose={onClose}
                      visible={visible}
                    >
                      <p
                        className="site-description-item-profile-p"
                        style={{
                          marginBottom: 24,
                        }}
                      >
                        <Title level={3}>{data.productionName} 출고정보</Title>
                      </p>
                      <p className="site-description-item-profile-p">
                        <Title level={5}>
                          <Text mark>출고내역</Text>
                        </Title>
                      </p>
                      <Descriptions
                        bordered
                        labelStyle={{ width: '140px' }}
                        column={1}
                      >
                        <Descriptions.Item label="출고코드">
                          {data.releases[0].releaseId}
                        </Descriptions.Item>
                        <Descriptions.Item label="출고일자">
                          {data.releases[0].releaseDate}
                        </Descriptions.Item>
                        <Descriptions.Item label="수량">
                          {data.releases[0].releaseQuantity}
                        </Descriptions.Item>
                        <Descriptions.Item label="공급가액(합계)">
                          {data.releases[0].releaseTotalPrice}
                        </Descriptions.Item>
                        <Descriptions.Item label="출고방식" span={2}>
                          {data.releases[0].releaseType}
                        </Descriptions.Item>
                        <Descriptions.Item label="비고">
                          {data.releases[0].releaseDescription}
                        </Descriptions.Item>
                      </Descriptions>
                      <Divider />
                      <p className="site-description-item-profile-p">
                        <Title level={5}>
                          <Text style={{ backgroundColor: '#E9DAC1' }}>
                            거래처정보
                          </Text>
                        </Title>
                      </p>
                      <Descriptions
                        bordered
                        labelStyle={{ width: '140px' }}
                        column={1}
                      >
                        <Descriptions.Item label="거래처코드">
                          {data.client.clientId}
                        </Descriptions.Item>
                        <Descriptions.Item label="거래처명">
                          {data.client.clientName}
                        </Descriptions.Item>
                        <Descriptions.Item label="담당자">
                          {data.client.clientManager}
                        </Descriptions.Item>
                        <Descriptions.Item label="연락처">
                          {data.client.clientTel}
                        </Descriptions.Item>
                        <Descriptions.Item label="주소">
                          {data.client.clientAddress}
                        </Descriptions.Item>
                        <Descriptions.Item label="담당자(자사)">
                          {data.client.employeeName}
                        </Descriptions.Item>
                      </Descriptions>
                    </Drawer>
                    {/* End Drawer */}
                  </div>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="비고">
                {data.productionDescription}
              </Descriptions.Item>
            </Descriptions>
            {/* <Typography.Title
              level={4}
              style={{
                marginTop: 15,
                borderRadius: '5px',
                backgroundColor: '#5A8F7B',
                color: '#fff',
                padding: '4px',
                width: '20%',
              }}
            >
              {data.releases.map((release) => {
                return <>{release.releaseDate}</>;
              })}
            </Typography.Title> */}
          </>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionDetailsPresenter;
