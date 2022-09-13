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
  Badge,
  Modal,
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FileUpload from 'components/FileUpload';
import FileDownload from 'components/FileDownload';

const { TextArea } = Input;
const { Option } = Select;

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
  abledEndDate,
  setAbledEndDate,
}) => {
  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [productionValue],
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
    [productionValue],
  );

  const onChangeDatePickerHandler = useCallback(
    (name, value) => {
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [productionValue],
  );

  const disabledDate = (current) => {
    return current < moment(productionValue.productionStartDate).endOf('day');
  };

  const warning = (value) => {
    if (value === '1') {
      Modal.warning({
        title: '주의',
        content: '생산 중으로 변경 시, 생산 정보 수정이 불가합니다.',
      });
      setAbledEndDate(value);
    } else if (value === '2') {
      Modal.error({
        title: '경고',
        content: '제품 생산 완료 일자를 입력해 주세요.',
      });
      setAbledEndDate(value);
    }
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
            >
              <Form.Item label="생산코드">
                <Input disabled={true} value={data.productionId} />
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
                <Input
                  name="productionName"
                  placeholder="생산 제품명"
                  defaultValue={data.productionName}
                  onChange={(e) => onChangeInputHandler('productionName', e)}
                  disabled={data.productionProgress === 1 ? true : false}
                />
              </Form.Item>
              <Form.Item label="브랜드">
                <Input
                  name="productionBrandName"
                  placeholder="생산 제품 브랜드명"
                  defaultValue={data.productionBrandName}
                  onChange={(e) =>
                    onChangeInputHandler('productionBrandName', e)
                  }
                  disabled={data.productionProgress === 1 ? true : false}
                />
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
                  defaultValue={data.productionPrice}
                  onChange={(e) => {
                    onChangeInputHandler('productionPrice', {
                      target: { value: e },
                    });
                  }}
                  disabled={data.productionProgress === 1 ? true : false}
                />
              </Form.Item>
              <Form.Item
                name="productionQuantity"
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
                  defaultValue={data.productionQuantity}
                  onChange={(e) =>
                    onChangeInputHandler('productionQuantity', {
                      target: { value: e },
                    })
                  }
                  disabled={data.productionProgress === 1 ? true : false}
                />
              </Form.Item>
              <Form.Item name="productionStandardAndUnit" label="규격/단위">
                <div style={{ display: 'flex' }}>
                  <Input
                    name="productionStandard"
                    placeholder="생산 제품 규격"
                    defaultValue={data.productionStandard}
                    onChange={(e) =>
                      onChangeInputHandler('productionStandard', e)
                    }
                    style={{ marginRight: 5 }}
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                  <Input
                    name="productionUnit"
                    placeholder="ex. mm, cm, yd, ..."
                    defaultValue={data.productionUnit}
                    onChange={(e) => onChangeInputHandler('productionUnit', e)}
                    disabled={data.productionProgress === 1 ? true : false}
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="productionProgress"
                label="진행 상황"
                rules={[
                  {
                    required: true,
                    message: '진행 상황을 입력해주세요!',
                  },
                ]}
                required
                tooltip="진행 상황은 필수 입력 필드입니다"
                initialValue={
                  data.productionProgress === 0
                    ? '생산 시작전'
                    : data.productionProgress === 1
                    ? '생산중'
                    : '생산 완료'
                }
              >
                <Select
                  onChange={(e) => {
                    onChangeInputHandler('productionProgress', {
                      target: { value: e },
                    });
                  }}
                  onSelect={warning}
                >
                  {`${data.productionProgress}` !== '1' ? (
                    <>
                      <Option value="0">
                        <Badge status="success" />
                        생산 시작전
                      </Option>

                      <Option value="1">
                        <Badge status="processing" />
                        생산중
                      </Option>
                    </>
                  ) : (
                    <>
                      <Option value="1">
                        <Badge status="processing" />
                        생산중
                      </Option>
                      <Option value="2">
                        <Badge status="error" />
                        생산 완료
                      </Option>
                    </>
                  )}
                </Select>
              </Form.Item>
              <Form.Item label="비고">
                <TextArea
                  name="productionDescription"
                  showCount
                  maxLength={1000}
                  rows={5}
                  placeholder="생산 제품 비고"
                  defaultValue={data.productionDescription}
                  onChange={(e) =>
                    onChangeInputHandler('productionDescription', e)
                  }
                  disabled={data.productionProgress === 1 ? true : false}
                />
              </Form.Item>
              <Form.Item
                name="productionStartDate"
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
                <DatePicker
                  placeholder="제품 생산 시작일자"
                  defaultValue={
                    data.productionStartDate
                      ? moment(data.productionStartDate)
                      : undefined
                  }
                  onChange={(e) =>
                    onChangeDatePickerHandler(
                      'productionStartDate',
                      moment(e).format('YYYY-MM-DD'),
                    )
                  }
                  disabled={data.productionProgress === 1 ? true : false}
                />
                <div style={{ display: 'none' }}>
                  {productionValue.productionStartDate}
                </div>
              </Form.Item>
              {data.productionProgress !== 0 ? (
                <Form.Item
                  name="productionEndDate"
                  label="완료일자"
                  rules={[
                    {
                      required: true,
                      message: '제품 생산 완료 일자를 입력해 주세요!',
                    },
                  ]}
                  required
                  tooltip="필수 입력 필드입니다"
                >
                  <DatePicker
                    placeholder="제품 생산 완료 일자"
                    defaultValue={
                      data.productionEndDate
                        ? moment(data.productionEndDate)
                        : undefined
                    }
                    onChange={(e) =>
                      onChangeDatePickerHandler(
                        'productionEndDate',
                        moment(e).format('YYYY-MM-DD'),
                      )
                    }
                    disabledDate={disabledDate}
                    disabled={abledEndDate === '2' ? false : true}
                  />
                </Form.Item>
              ) : (
                ''
              )}
              <Form.Item
                name="productionReleasedDate"
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
                <DatePicker
                  placeholder="출고 예정 일자"
                  defaultValue={
                    data.productionReleasedDate
                      ? moment(data.productionReleasedDate)
                      : undefined
                  }
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
              <Form.Item
                name="clientId"
                label="거래처코드"
                rules={[
                  {
                    required: true,
                    message: '거래처 코드를 입력해주세요!',
                  },
                ]}
                required
                tooltip="필수 입력 필드입니다"
                initialValue={
                  data.client.clientName + '(' + data.client.clientId + ')'
                }
              >
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
              <Form.Item label="파일" getValueFromEvent={normFile}>
                <FileUpload
                  onChangeHandler={onChangeHandler}
                  productionValue={productionValue}
                />
                {productionValue.productionFile !== data.productionFile ? (
                  ''
                ) : (
                  <FileDownload file={data.productionFile} />
                )}
              </Form.Item>
            </Form>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
          </>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionUpdatePresenter;
