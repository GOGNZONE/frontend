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

const ReleaseRegistrationPresenter = ({
  releaseValue,
  onChangeHandler,
  onClickHandler,
  isModalVisible,
  setIsModalVisible,
  productionData,
  loading,
}) => {
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (
      releaseValue.deliveryDto.deliveryCompanyName === '' ||
      releaseValue.deliveryDto.deliveryTrackingNumber === ''
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

  const onChangeProductionInputHandler = useCallback((name, value) => {
    onChangeHandler({
      ...releaseValue,
      production: {
        [name]: value,
      },
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
          >
            <Form.Item
              name="production"
              label="출고 대상 생산품목"
              rules={[
                {
                  required: true,
                  message: '출고 대상 생산품목을 선택해주세요!',
                },
              ]}
            >
              <Select
                showSearch
                placeholder="미출고 생산품목"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(e) => {
                  onChangeProductionInputHandler('productionId', e);
                }}
              >
                {productionData.map((production) => {
                  if (production.releases.length === 0) {
                    return (
                      <Option
                        value={`${production.productionId}`}
                        key={`${production.productionId}`}
                      >
                        {production.productionName} ({production.productionId})
                      </Option>
                    );
                  }
                })}
              </Select>
            </Form.Item>
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
              <TextArea
                name="releaseDescription"
                showCount
                maxLength={1000}
                rows={5}
                placeholder="출고 관련 비고사항"
                onChange={(e) => onChangeInputHandler('releaseDescription', e)}
              />
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
              margin: 5,
              backgroundColor: '#FEB139',
              border: '#FEB139',
            }}
            onClick={() => onClickHandler()}
          >
            등록
          </Button>
          <Link to="/admin/release/list">
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
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseRegistrationPresenter;
