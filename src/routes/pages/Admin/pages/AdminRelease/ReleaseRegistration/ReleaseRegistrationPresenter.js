import React, { useCallback } from 'react';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Button,
  InputNumber,
  Modal,
  BackTop,
  Select,
  Spin,
  message,
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;
const { Text } = Typography;

const ReleaseRegistrationPresenter = ({
  releaseValue,
  onChangeHandler,
  onClickHandler,
  isModalVisible,
  setIsModalVisible,
  productionData,
  loading,
  setIndex,
  index,
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

  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;

    if (value === productionData[index].productionQuantity) {
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

  const onChangeDeliveryInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...releaseValue,
      delivery: { ...releaseValue.delivery, [name]: value },
    });
  });

  const disabledDate = (current) => {
    return (
      current < moment(productionData[index].productionEndDate).endOf('day')
    );
  };

  const onSelect = (value) => {
    setIndex(value);
  };

  return (
    <>
      <Typography.Title level={3} style={{ marginBottom: 25 }}>
        출고 등록
      </Typography.Title>
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
              label="출고 대상 생산품목"
              rules={[
                {
                  required: true,
                  message: '출고 대상 생산품목을 선택해주세요!',
                },
              ]}
            >
              <Form.Item name="production" noStyle>
                <Select
                  showSearch
                  placeholder="미출고 생산품목"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                  onSelect={onSelect}
                >
                  {productionData.map((production, index) => {
                    if (
                      production.releases.length === 0 &&
                      production.productionEndDate !== null
                    ) {
                      return (
                        <Option
                          value={`${index}`}
                          key={`${production.productionId}`}
                        >
                          {production.productionName} ({production.productionId}
                          )
                        </Option>
                      );
                    }
                  })}
                </Select>
              </Form.Item>
            </Form.Item>
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
                  max={productionData[index]?.productionQuantity}
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
              {index ? (
                <Text type="danger">
                  출고가능수량 : {productionData[index].productionQuantity}개
                </Text>
              ) : (
                ''
              )}
            </Form.Item>
            <Form.Item label="공급가액(합계)">
              <Form.Item noStyle>
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  placeholder="공급 가액"
                  formatter={(value) =>
                    `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                  disabled={true}
                  value={
                    productionData[index]?.releases.length !== 0
                      ? 0
                      : releaseValue.releaseQuantity *
                        `${productionData[index].productionPrice}`
                  }
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
                  footer={[]}
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
              </div>
            </Form.Item>
            <Form.Item label="비고">
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
        ) : (
          ''
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            htmlType="button"
            style={{
              marginRight: 15,
            }}
            onClick={() => onClickHandler()}
          >
            등록
          </Button>
          <Link to="/admin/release/list">
            <Button type="primary" danger>
              취소
            </Button>
          </Link>
        </div>
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseRegistrationPresenter;
