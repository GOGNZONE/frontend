import React, { useCallback } from 'react';
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
  Empty,
  message,
  Form,
} from 'antd';
import moment from 'moment';

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

const ReleaseUpdatePresenter = ({
  data,
  loading,
  onClickHandler,
  releaseValue,
  onChangeHandler,
  isModalVisible,
  showModal,
  handleOk,
  handleCancel,
  setSwitchToEditPage,
}) => {
  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...releaseValue,
      [name]: value,
    });
  });

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChangeHandler({
      ...releaseValue,
      [name]: value,
    });
  });

  const onChangeDeliveryInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...releaseValue,
      deliveryDto: { ...releaseValue.deliveryDto, [name]: value },
    });
  });

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
            onClick={() => {
              onClickHandler();
            }}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            style={{ backgroundColor: '#D61C4E', border: '#D61C4E' }}
            onClick={() => setSwitchToEditPage(true)}
          >
            취소
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
                  defaultValue={
                    data.releaseDate ? moment(data.releaseDate) : undefined
                  }
                  onChange={(e) =>
                    onChangeDatePickerHandler(
                      'releaseDate',
                      moment(e).format('YYYY-MM-DD'),
                    )
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="수량">
                <InputNumber
                  min={1}
                  style={{
                    width: '100%',
                  }}
                  placeholder="출고 수량"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                  defaultValue={data.releaseQuantity}
                  onChange={(e) =>
                    onChangeInputHandler('releaseQuantity', {
                      target: { value: e },
                    })
                  }
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
                  defaultValue={data.releaseTotalPrice}
                  onChange={(e) => {
                    onChangeInputHandler('releaseTotalPrice', {
                      target: { value: e },
                    });
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="출고방식" span={2}>
                {data.releaseType}
              </Descriptions.Item>
              <Descriptions.Item label="비고" span={2}>
                <TextArea
                  name="releaseDescription"
                  showCount
                  maxLength={1000}
                  rows={5}
                  placeholder="출고 관련 비고사항"
                  defaultValue={data.releaseDescription}
                  onChange={(e) =>
                    onChangeInputHandler('releaseDescription', e)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="배송">
                <Button
                  type="primary"
                  style={{
                    marginLeft: '5px',
                    backgroundColor: '#797A7E',
                    border: '#797A7E',
                  }}
                  onClick={showModal}
                >
                  {data.deliveryDto.deliveryCompanyName === ''
                    ? '택배사등록'
                    : '택배사수정'}
                </Button>
                <Modal
                  title="택배사 등록"
                  centered
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[]}
                >
                  <Form
                    labelCol={{
                      span: 6,
                    }}
                  >
                    <Form.Item
                      name="deliveryCompanyName"
                      label="택배사"
                      rules={[
                        {
                          required: true,
                          message: '택배사를 입력해주세요!',
                        },
                      ]}
                      required
                      tooltip="택배사는 필수 입력 필드입니다."
                    >
                      <Input
                        placeholder="택배사명"
                        onChange={(e) =>
                          onChangeDeliveryInputHandler('deliveryCompanyName', e)
                        }
                        defaultValue={data.deliveryDto.deliveryCompanyName}
                      />
                    </Form.Item>
                    <Form.Item
                      name="deliveryTrackingNumber"
                      label="운송장번호"
                      rules={[
                        {
                          required: true,
                          message: '운송장 번호를 입력해주세요!',
                        },
                      ]}
                      required
                      tooltip="운송장 번호는 필수 입력 필드입니다."
                    >
                      <Input
                        placeholder="운송장 번호"
                        onChange={(e) =>
                          onChangeDeliveryInputHandler(
                            'deliveryTrackingNumber',
                            e,
                          )
                        }
                        defaultValue={data.deliveryDto.deliveryTrackingNumber}
                      />
                    </Form.Item>
                  </Form>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      key="back"
                      onClick={handleCancel}
                      style={{ margin: 5 }}
                    >
                      취소
                    </Button>
                    <Button
                      type="primary"
                      ghost
                      key="submit"
                      onClick={() => handleOk()}
                      style={{ margin: 5 }}
                    >
                      등록
                    </Button>
                  </div>
                </Modal>
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
                    marginRight: 5,
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
                  style={{ width: '380px' }}
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
                    marginRight: 5,
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
                  style={{ width: '391px' }}
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

              {/* 배송정보 */}
              <div style={{ width: '33%' }}>
                <Typography.Title
                  level={4}
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#5A8F7B',
                    color: '#fff',
                    padding: '4px',
                  }}
                >
                  배송정보
                </Typography.Title>
                {data.deliveryDto.deliveryCompanyName === '' ||
                data.deliveryDto.deliveryTrackingNumber === '' ? (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                ) : (
                  <Descriptions
                    bordered
                    column={1}
                    labelStyle={{ width: '140px' }}
                    style={{ width: '380px' }}
                  >
                    <Descriptions.Item label="택배사">
                      {data.deliveryDto.deliveryCompanyName}
                    </Descriptions.Item>
                    <Descriptions.Item label="운송장번호">
                      {data.deliveryDto.deliveryTrackingNumber}
                    </Descriptions.Item>
                  </Descriptions>
                )}
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
