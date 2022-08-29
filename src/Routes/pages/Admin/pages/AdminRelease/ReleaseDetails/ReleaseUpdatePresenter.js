import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  Typography,
  Button,
  Spin,
  Descriptions,
  Modal,
  DatePicker,
  InputNumber,
  Input,
} from 'antd';

const { confirm } = Modal;
const { TextArea } = Input;

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

const ReleaseUpdatePresenter = ({ data, loading, setSwitchToEditPage }) => {
  console.log(data);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          출고 상세정보
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
            onClick={() => setSwitchToEditPage(true)}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
            onClick={showDeleteConfirm}
          >
            삭제
          </Button>
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
      <Spin
        tip="Loading..."
        spinning={loading && !data}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {data ? (
          <div>
            <Descriptions
              bordered
              labelStyle={{ width: '150px', fontSize: '15px' }}
              column={2}
              style={{ marginBottom: '20px' }}
            >
              <Descriptions.Item label="출고코드">
                {data.releaseId}
              </Descriptions.Item>
              <Descriptions.Item label="출고일자">
                <DatePicker
                  placeholder="제품 출고 일자"
                  // onChange={(e) =>
                  //   onChangeDatePickerHandler(
                  //     'releaseDate',
                  //     moment(e).format('YYYY-MM-DD'),
                  //   )
                  // }
                />
              </Descriptions.Item>
              <Descriptions.Item label="수량">
                <InputNumber
                  defaultValue={1}
                  min={1}
                  style={{
                    width: '100%',
                  }}
                  placeholder="출고 수량"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                  // onChange={(e) =>
                  //   onChangeInputHandler('releaseQuantity', {
                  //     target: { value: e },
                  //   })
                  // }
                />
              </Descriptions.Item>
              <Descriptions.Item label="공급가액(합계)">
                <InputNumber
                  min={0}
                  style={{
                    width: '100%',
                  }}
                  placeholder="공급 가액"
                  formatter={(value) =>
                    `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                  // onChange={(e) => {
                  //   onChangeInputHandler('releaseTotalPrice', {
                  //     target: { value: e },
                  //   });
                  // }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="출고방식" span={2}>
                {data.releaseType}
              </Descriptions.Item>
              <Descriptions.Item label="비고">
                <TextArea
                  name="releaseDescription"
                  showCount
                  maxLength={1000}
                  rows={5}
                  placeholder="출고 관련 비고사항"
                  // defaultValue={production.productionDescription}
                  // onChange={(e) =>
                  //   onChangeInputHandler('productionDescription', e)
                  // }
                />
              </Descriptions.Item>
            </Descriptions>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {/* 거래처정보 */}
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
                <Descriptions
                  bordered
                  column={1}
                  labelStyle={{ width: '140px' }}
                  style={{ marginLeft: '7px', width: '373px' }}
                >
                  <Descriptions.Item label="거래처코드">
                    {data.releaseClientDto.clientId}
                  </Descriptions.Item>
                  <Descriptions.Item label="거래처명">
                    {data.releaseClientDto.clientName}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자">
                    {data.releaseClientDto.clientManager}
                  </Descriptions.Item>
                  <Descriptions.Item label="연락처">
                    {data.releaseClientDto.clientTel}
                  </Descriptions.Item>
                  <Descriptions.Item label="주소">
                    {data.releaseClientDto.clientAddress}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자(자사)">
                    {data.releaseClientDto.employeeName}
                  </Descriptions.Item>
                </Descriptions>
              </div>

              {/* 상품정보 */}
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
                <Descriptions
                  bordered
                  column={1}
                  labelStyle={{ width: '160px' }}
                  style={{ marginLeft: '7px', width: '384px' }}
                >
                  <Descriptions.Item label="생산 제품명">
                    {data.releaseProductionDto.productionName}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 제품 브랜드명">
                    {data.releaseProductionDto.productionBrandName}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 제품 단가">
                    {data.releaseProductionDto.productionPrice}
                  </Descriptions.Item>
                </Descriptions>
              </div>

              {/* 택배정보 */}
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
                <Descriptions
                  bordered
                  column={1}
                  labelStyle={{ width: '140px' }}
                  style={{ marginLeft: '7px', width: '373px' }}
                >
                  <Descriptions.Item label="택배 ID">
                    {data.deliveryDto.deliveryId}
                  </Descriptions.Item>
                  <Descriptions.Item label="택배사">
                    {data.deliveryDto.deliveryCompanyName}
                  </Descriptions.Item>
                  <Descriptions.Item label="운송장번호">
                    {data.deliveryDto.deliveryTrackingNumber}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ReleaseUpdatePresenter;
