import React, { useCallback } from 'react';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Button,
  InputNumber,
  Descriptions,
  Spin,
  Modal,
  BackTop,
  message,
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { Text } = Typography;

const ReleaseRegistrationInProductionPresenter = ({
  releaseValue,
  onChangeHandler,
  onClickHandler,
  productionData,
  loading,
  isModalVisible,
  setIsModalVisible,
}) => {
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (
      releaseValue.delivery.deliveryCompanyName === '' ||
      releaseValue.delivery.deliveryTrackingNumber === ''
    ) {
      message.error('필수 입력값을 입력해 주세요.');
    } else {
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeDeliveryInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...releaseValue,
      delivery: { ...releaseValue.delivery, [name]: value },
    });
  });

  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;

    if (value == `${productionData.productionQuantity}`) {
      message.warning('출고수량은 생산 수량을 초과할 수 없습니다.');
    }

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

  const disabledDate = (current) => {
    return current < moment(productionData.productionEndDate).endOf('day');
  };

  return (
    <>
      {productionData ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography.Title level={3} style={{ marginBottom: 25 }}>
            {productionData.productionName} 출고 등록
          </Typography.Title>
          <div>
            <Button
              type="primary"
              htmlType="button"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
              onClick={() => onClickHandler()}
            >
              등록
            </Button>
            <Link to={`/admin/production/${productionData.productionId}`}>
              <Button
                type="primary"
                style={{
                  margin: 5,
                  backgroundColor: '#D61C4E',
                  border: '#D61C4E',
                }}
              >
                취소
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
      <Spin
        tip="Loading..."
        spinning={loading && !productionData}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {productionData ? (
          <Form
            labelCol={{
              span: 7,
            }}
            wrapperCol={{
              span: 10,
            }}
            layout="horizontal"
            size="large"
            initialValues={{
              releaseQuantity: 1,
              delivery: '택배',
            }}
          >
            <Form.Item
              label="출고일자"
              rules={[
                {
                  required: true,
                  message: '출고일자를 입력해주세요!',
                },
              ]}
              required
              tooltip="출고일자는 필수 입력 필드입니다"
            >
              <Form.Item name="releaseDate" noStyle>
                <DatePicker
                  placeholder="제품 출고 일자"
                  onChange={(e) =>
                    onChangeDatePickerHandler(
                      'releaseDate',
                      moment(e).format('YYYY-MM-DD'),
                    )
                  }
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item
              label="출고수량"
              rules={[
                {
                  required: true,
                  message: '출고수량을 입력해주세요!',
                },
              ]}
              required
              tooltip="출고 수량은 필수 입력 필드입니다"
            >
              <Form.Item name="releaseQuantity" noStyle>
                <InputNumber
                  min={1}
                  max={`${productionData.productionQuantity}`}
                  style={{
                    width: '100%',
                  }}
                  placeholder="출고 수량"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                  onChange={(e) =>
                    onChangeInputHandler('releaseQuantity', {
                      target: { value: e },
                    })
                  }
                />
              </Form.Item>
              <Text type="danger">
                출고가능수량 : {productionData.productionQuantity}개
              </Text>
            </Form.Item>
            <Form.Item label="공급가액(합계)">
              <Form.Item noStyle>
                <InputNumber
                  value={
                    releaseValue.releaseQuantity *
                    `${productionData.productionPrice}`
                  }
                  style={{
                    width: '100%',
                  }}
                  placeholder="공급 가액"
                  formatter={(value) =>
                    `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                  disabled={true}
                />
                <div style={{ display: 'none' }}>
                  {releaseValue.releaseQuantity}
                </div>
              </Form.Item>
            </Form.Item>
            <Form.Item label="출고방식">
              <div style={{ display: 'flex' }}>
                <Form.Item name="delivery" noStyle>
                  <Input disabled={true} value="배송" />
                </Form.Item>
                <Button
                  type="primary"
                  style={{
                    marginLeft: '5px',
                    backgroundColor: '#797A7E',
                    border: '#797A7E',
                  }}
                  onClick={showModal}
                >
                  택배사등록
                </Button>
                <Modal
                  title="택배사 등록"
                  centered
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="back" onClick={handleCancel}>
                      취소
                    </Button>,
                    <Button
                      type="primary"
                      ghost
                      key="submit"
                      onClick={handleOk}
                    >
                      등록
                    </Button>,
                  ]}
                >
                  <Form
                    labelCol={{
                      span: 6,
                    }}
                  >
                    <Form.Item
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
                      <Form.Item name="deliveryCompanyName" noStyle>
                        <Input
                          placeholder="택배사명"
                          onChange={(e) =>
                            onChangeDeliveryInputHandler(
                              'deliveryCompanyName',
                              e,
                            )
                          }
                        />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item
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
                      <Form.Item name="deliveryTrackingNumber" noStyle>
                        <Input
                          placeholder="운송장 번호"
                          onChange={(e) =>
                            onChangeDeliveryInputHandler(
                              'deliveryTrackingNumber',
                              e,
                            )
                          }
                        />
                      </Form.Item>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </Form.Item>
            <Form.Item label="비고">
              <Form.Item name="releaseDescription">
                <TextArea
                  showCount
                  maxLength={1000}
                  rows={5}
                  placeholder="출고 관련 비고사항"
                  onChange={(e) =>
                    onChangeInputHandler('releaseDescription', e)
                  }
                />
              </Form.Item>
            </Form.Item>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 50,
              }}
            >
              <div style={{ width: '50%' }}>
                <Typography.Title
                  level={4}
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#5A8F7B',
                    color: '#fff',
                    padding: '4px',
                    marginRight: 10,
                  }}
                >
                  상품정보
                </Typography.Title>
                <Descriptions
                  bordered
                  column={1}
                  labelStyle={{ width: '160px' }}
                  style={{ width: '98%' }}
                >
                  <Descriptions.Item label="생산코드">
                    {productionData.productionId}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산품목">
                    {productionData.productionName}
                  </Descriptions.Item>
                  <Descriptions.Item label="브랜드">
                    {productionData.productionBrandName}
                  </Descriptions.Item>
                  <Descriptions.Item label="단가">
                    {productionData.productionPrice}원
                  </Descriptions.Item>
                  <Descriptions.Item label="제품수량">
                    {productionData.productionQuantity}개
                  </Descriptions.Item>
                  <Descriptions.Item label="규격/단위">
                    {productionData.productionStandard}
                    {productionData.productionUnit}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 시작 일자">
                    {productionData.productionStartDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 완료 일자">
                    {productionData.productionEndDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="거래처코드">
                    {productionData.client.clientName +
                      '(' +
                      productionData.client.clientId +
                      ')'}
                  </Descriptions.Item>
                  <Descriptions.Item label="비고">
                    {productionData.productionDescription}
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div style={{ width: '50%' }}>
                <Typography.Title
                  level={4}
                  style={{
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
                  style={{ width: '100%' }}
                >
                  <Descriptions.Item label="거래처코드">
                    {productionData.client.clientId}
                  </Descriptions.Item>
                  <Descriptions.Item label="거래처명">
                    {productionData.client.clientName}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자">
                    {productionData.client.clientManager}
                  </Descriptions.Item>
                  <Descriptions.Item label="연락처">
                    {productionData.client.clientTel}
                  </Descriptions.Item>
                  <Descriptions.Item label="주소">
                    {productionData.client.clientAddress}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자(자사)">
                    {productionData.client.employeeName}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </Form>
        ) : (
          ''
        )}
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseRegistrationInProductionPresenter;
