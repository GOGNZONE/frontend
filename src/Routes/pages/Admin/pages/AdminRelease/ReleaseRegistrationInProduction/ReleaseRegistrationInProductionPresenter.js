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
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;

const ReleaseRegistrationInProductionPresenter = ({
  releaseValue,
  onChangeHandler,
  onClickHandler,
  productionData,
  loading,
  isModalVisible,
  setIsModalVisible,
}) => {
  console.log(productionData);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeDeliveryInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...releaseValue,
      deliveryDto: { ...releaseValue.deliveryDto, [name]: value },
    });
  });

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
          >
            <Form.Item
              name="releaseId"
              label="출고코드"
              rules={[
                {
                  required: true,
                  message: '출고코드를 입력해주세요!',
                },
              ]}
            >
              <Input
                placeholder="출고코드"
                onChange={(e) => onChangeInputHandler('releaseId', e)}
              />
            </Form.Item>
            <Form.Item
              name="releaseDate"
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
              <DatePicker
                placeholder="제품 출고 일자"
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'releaseDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
              />
            </Form.Item>
            <Form.Item
              name="releaseQuantity"
              label="출고수량"
              rules={[
                {
                  required: true,
                  message: '출고수량을 입력해주세요!',
                },
              ]}
              required
              tooltip="출고 수량은 필수 입력 필드입니다"
              initialValue={1}
            >
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
                onChange={(e) =>
                  onChangeInputHandler('releaseQuantity', {
                    target: { value: e },
                  })
                }
              />
            </Form.Item>
            <Form.Item
              name="releaseTotalPrice"
              label="공급가액(합계)"
              rules={[
                {
                  required: true,
                  message: '공급 가액을 입력해주세요!',
                },
              ]}
              required
              tooltip="공급 가액은 필수 입력 필드입니다"
              initialValue={0}
            >
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
                onChange={(e) => {
                  onChangeInputHandler('releaseTotalPrice', {
                    target: { value: e },
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="출고방식">
              <div style={{ display: 'flex' }}>
                <Input disabled={true} value="배송" />
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
                      />
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </Form.Item>
            <Form.Item label="비고">
              <TextArea
                name="releaseDescription"
                showCount
                maxLength={1000}
                rows={5}
                placeholder="출고 관련 비고사항"
                onChange={(e) => onChangeInputHandler('releaseDescription', e)}
              />
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
                    {productionData.productionPrice}
                  </Descriptions.Item>
                  <Descriptions.Item label="제품수량/단위">
                    {productionData.productionQuantity}
                    {productionData.productionUnit}
                  </Descriptions.Item>
                  <Descriptions.Item label="규격">
                    {productionData.productionStandard}
                  </Descriptions.Item>
                  <Descriptions.Item label="생성일자">
                    {productionData.productionDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="거래처코드">
                    {productionData.releaseClientDto.clientName +
                      '(' +
                      productionData.releaseClientDto.clientId +
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
                    {productionData.releaseClientDto.clientId}
                  </Descriptions.Item>
                  <Descriptions.Item label="거래처명">
                    {productionData.releaseClientDto.clientName}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자">
                    {productionData.releaseClientDto.clientManager}
                  </Descriptions.Item>
                  <Descriptions.Item label="연락처">
                    {productionData.releaseClientDto.clientTel}
                  </Descriptions.Item>
                  <Descriptions.Item label="주소">
                    {productionData.releaseClientDto.clientAddress}
                  </Descriptions.Item>
                  <Descriptions.Item label="담당자(자사)">
                    {productionData.releaseClientDto.employeeName}
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
