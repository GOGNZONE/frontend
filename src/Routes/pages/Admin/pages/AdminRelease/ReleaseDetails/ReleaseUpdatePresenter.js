import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
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
  Form,
} from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const { Text } = Typography;

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
  console.log(data);
  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;

    // if (value > `${data.production.productionQuantity}`) {
    //   message.warning('출고수량은 생산 수량을 초과할 수 없습니다.');
    // }

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
      delivery: { ...releaseValue.delivery, [name]: value },
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
                <Form
                  initialValues={{
                    releaseDate: moment(releaseValue.releaseDate),
                  }}
                >
                  <Form.Item noStyle>
                    <Form.Item name="releaseDate" noStyle>
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
                  </Form.Item>
                </Form>
              </Descriptions.Item>
              <Descriptions.Item label="출고수량">
                <Form
                  initialValues={{
                    releaseQuantity: releaseValue.releaseQuantity,
                  }}
                >
                  <Form.Item noStyle>
                    <Form.Item name="releaseQuantity" noStyle>
                      <InputNumber
                        min={1}
                        max={`${data.production.productionQuantity}`}
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
                  </Form.Item>
                </Form>
                <Text style={{ color: '#277BC0' }}>
                  * 생산수량 : {data.production.productionQuantity}개
                </Text>
                <br />
                <Text type="danger">
                  * 출고예정수량 : {data.releaseQuantity}개
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="공급가액(합계)">
                <InputNumber
                  value={
                    releaseValue.releaseQuantity *
                    `${data.production.productionPrice}`
                  }
                  style={{
                    width: '100%',
                  }}
                  placeholder="공급 가액"
                  formatter={(value) =>
                    `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                  defaultValue={data.releaseTotalPrice}
                  disabled={true}
                />
                <div style={{ display: 'none' }}>
                  {releaseValue.releaseQuantity}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="출고방식" span={2}>
                {data.releaseType}
              </Descriptions.Item>
              <Descriptions.Item label="비고" span={2}>
                <Form
                  initialValues={{
                    releaseDescription: releaseValue.releaseDescription,
                  }}
                >
                  <Form.Item noStyle>
                    <Form.Item name="releaseDescription" noStyle>
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
                </Form>
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
                  {data.delivery === null ? '택배사등록' : '택배사수정'}
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
                    initialValues={{
                      deliveryCompanyName:
                        releaseValue.delivery === null
                          ? ''
                          : releaseValue.delivery.deliveryCompanyName,
                      deliveryTrackingNumber:
                        releaseValue.delivery === null
                          ? ''
                          : releaseValue.delivery.deliveryTrackingNumber,
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
                  style={{ width: '98.5%' }}
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
                  style={{ width: '98.5%' }}
                >
                  <Descriptions.Item label="생산 제품명">
                    {data.production.productionName}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 제품 브랜드명">
                    {data.production.productionBrandName}
                  </Descriptions.Item>
                  <Descriptions.Item label="생산 제품 단가">
                    {data.production.productionPrice}원
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
                {data.delivery === null ? (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                ) : (
                  <Descriptions
                    bordered
                    column={1}
                    labelStyle={{ width: '140px' }}
                    style={{ width: '98.5%' }}
                  >
                    <Descriptions.Item label="택배사">
                      {data.delivery.deliveryCompanyName}
                    </Descriptions.Item>
                    <Descriptions.Item label="운송장번호">
                      {data.delivery.deliveryTrackingNumber}
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
