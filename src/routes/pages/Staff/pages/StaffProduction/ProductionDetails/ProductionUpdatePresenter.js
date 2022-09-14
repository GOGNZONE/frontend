import React, { useCallback } from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  DatePicker,
  Spin,
} from 'antd';
import moment from 'moment';
import FileUpload from 'components/FileUpload';

const { TextArea } = Input;
const { Option } = Select;
const { Text } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const ProductionUpdatePresenter = ({
  data,
  loading,
  setSwitchToEditPage,
  onClickHandler,
  productionValue,
  onChangeHandler,
  clientData,
}) => {
  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [onChangeHandler, productionValue],
  );

  const onChangeClientHandler = useCallback(
    (name, value) => {
      onChangeHandler({
        ...productionValue,
        client: {
          [name]: value,
        },
      });
    },
    [onChangeHandler, productionValue],
  );

  const onChangeDatePickerHandler = useCallback(
    (name, value) => {
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [onChangeHandler, productionValue],
  );

  const disabledDate = (current) => {
    return current < moment(productionValue.productionStartDate).endOf('day');
  };

  return (
    <>
      <Typography.Title level={3} style={{ marginBottom: 25 }}>
        생산 정보수정
      </Typography.Title>
      <Spin
        tip="Loading..."
        spinning={loading && !data}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {data ? (
          <>
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
                productionId: productionValue.productionId,
                productionName: productionValue.productionName,
                productionBrandName: productionValue.productionBrandName,
                productionPrice: productionValue.productionPrice,
                productionQuantity: productionValue.productionQuantity,
                productionStandard: productionValue.productionStandard,
                productionUnit: productionValue.productionUnit,
                productionDescription: productionValue.productionDescription,
                productionStartDate: moment(
                  productionValue.productionStartDate,
                ),
                productionReleasedDate: moment(
                  productionValue.productionReleasedDate,
                ),
                clientId: productionValue.client.clientId,
              }}
            >
              <Form.Item label="생산코드">
                <Form.Item name="productionId" noStyle>
                  <Input disabled={true} />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="생산품목"
                rules={[
                  {
                    required: true,
                    message: '제품명을 입력해주세요!',
                  },
                ]}
                required
                tooltip="생산 제품명은 필수 입력 필드입니다"
              >
                <Form.Item name="productionName" noStyle>
                  <Input
                    placeholder="생산 제품명"
                    onChange={(e) => onChangeInputHandler('productionName', e)}
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item label="브랜드">
                <Form.Item name="productionBrandName" noStyle>
                  <Input
                    placeholder="생산 제품 브랜드명"
                    onChange={(e) =>
                      onChangeInputHandler('productionBrandName', e)
                    }
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="단가"
                rules={[
                  {
                    required: true,
                    message: '제품 단가를 입력해주세요!',
                  },
                ]}
                required
                tooltip="단가는 필수 입력 필드입니다"
              >
                <Form.Item name="productionPrice" noStyle>
                  <InputNumber
                    min={0}
                    style={{
                      width: '100%',
                    }}
                    placeholder="생산 제품 단가"
                    formatter={(value) =>
                      `\￦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                    onChange={(e) => {
                      onChangeInputHandler('productionPrice', {
                        target: { value: e },
                      });
                    }}
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="제품수량"
                rules={[
                  {
                    required: true,
                    message: '제품수량을 입력해주세요!',
                  },
                ]}
                required
                tooltip="제품수량은 필수 입력 필드입니다"
              >
                <Form.Item name="productionQuantity" noStyle>
                  <InputNumber
                    min={1}
                    style={{
                      width: '100%',
                    }}
                    placeholder="생산 제품 수량"
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                    onChange={(e) =>
                      onChangeInputHandler('productionQuantity', {
                        target: { value: e },
                      })
                    }
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item label="규격/단위">
                <div style={{ display: 'flex' }}>
                  <Form.Item name="productionStandard" noStyle>
                    <Input
                      placeholder="생산 제품 규격"
                      onChange={(e) =>
                        onChangeInputHandler('productionStandard', e)
                      }
                      style={{ marginRight: 5 }}
                      disabled={data.productionProgress === 1 ? true : false}
                    />
                  </Form.Item>
                  <Form.Item name="productionUnit" noStyle>
                    <Input
                      placeholder="ex. mm, cm, yd, ..."
                      onChange={(e) =>
                        onChangeInputHandler('productionUnit', e)
                      }
                      disabled={data.productionProgress === 1 ? true : false}
                    />
                  </Form.Item>
                </div>
              </Form.Item>
              <Form.Item label="비고">
                <Form.Item name="productionDescription" noStyle>
                  <TextArea
                    showCount
                    maxLength={1000}
                    rows={5}
                    placeholder="생산 제품 비고"
                    onChange={(e) =>
                      onChangeInputHandler('productionDescription', e)
                    }
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="시작일자"
                rules={[
                  {
                    required: true,
                    message: '제품 생산 시작일자를 입력해주세요!',
                  },
                ]}
                required
                tooltip="필수 입력 필드입니다"
              >
                <Form.Item name="productionStartDate" noStyle>
                  <DatePicker
                    placeholder="제품 생산 시작일자"
                    onChange={(e) =>
                      onChangeDatePickerHandler(
                        'productionStartDate',
                        moment(e).format('YYYY-MM-DD'),
                      )
                    }
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
                <div style={{ display: 'none' }}>
                  {productionValue.productionStartDate}
                </div>
              </Form.Item>
              <Form.Item
                label="출고예정일자"
                rules={[
                  {
                    required: true,
                    message: '출고 예정일자를 입력해주세요!',
                  },
                ]}
                required
                tooltip="필수 입력 필드입니다"
              >
                <Form.Item name="productionReleasedDate" noStyle>
                  <DatePicker
                    placeholder="출고 예정 일자"
                    onChange={(e) =>
                      onChangeDatePickerHandler(
                        'productionReleasedDate',
                        moment(e).format('YYYY-MM-DD'),
                      )
                    }
                    disabledDate={disabledDate}
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="거래처코드"
                rules={[
                  {
                    required: true,
                    message: '거래처 코드를 입력해주세요!',
                  },
                ]}
                required
                tooltip="필수 입력 필드입니다"
              >
                <Form.Item name="clientId" noStyle>
                  <Select
                    onChange={(e) => {
                      onChangeClientHandler('clientId', e);
                    }}
                    disabled={data.productionProgress === 1 ? true : false}
                  >
                    {clientData.map((data) => (
                      <Option key={data.clientId} value={data.clientId}>
                        {data.clientName}({data.clientId})
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item label="파일" getValueFromEvent={normFile}>
                {data.productionProgress === 0 ? (
                  <>
                    <FileUpload
                      onChangeHandler={onChangeHandler}
                      preventValue={productionValue}
                      fileName={'productionFile'}
                    />
                    {productionValue.productionFile !== data.productionFile ? (
                      ''
                    ) : (
                      <Text underline>{data.productionFile}</Text>
                    )}
                  </>
                ) : data.productionFile !== null ? (
                  <Text underline>{data.productionFile}</Text>
                ) : (
                  '첨부파일 없음'
                )}
              </Form.Item>
            </Form>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {data.productionProgress === 1 ? (
                ''
              ) : (
                <Button
                  type="primary"
                  htmlType="button"
                  style={{
                    margin: 5,
                    backgroundColor: '#FEB139',
                    border: '#FEB139',
                  }}
                  onClick={() => {
                    onClickHandler();
                  }}
                >
                  저장
                </Button>
              )}
              <Button
                type="primary"
                style={{
                  margin: 5,
                  backgroundColor: '#D61C4E',
                  border: '#D61C4E',
                }}
                onClick={() => setSwitchToEditPage(true)}
              >
                취소
              </Button>
            </div>
          </>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionUpdatePresenter;
