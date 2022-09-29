import React, { useCallback, useEffect } from 'react';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Button,
  InputNumber,
  Select,
  Spin,
  message,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import FileUpload from 'components/FileUpload';

const { TextArea } = Input;
const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ProductionRegistrationPresenter = ({
  productionValue,
  onChangeHandler,
  onClickHandler,
  clientData,
  loading,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (clientData?.length === 0) {
      message.loading('', 0.5).then(() => {
        message.warning(
          '등록된 거래처가 없습니다. 거래처 등록을 먼저 진행해 주세요.',
        );
        navigate('/staff/client/list');
      });
    }
  }, []);

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

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChangeHandler({
      ...productionValue,
      [name]: value,
    });
  });

  const onChangeClientHandler = useCallback((name, value) => {
    onChangeHandler({
      ...productionValue,
      client: {
        [name]: value,
      },
    });
  });

  const disabledDate = (current) => {
    return current < moment(productionValue.productionStartDate).endOf('day');
  };

  return (
    <>
      <Typography.Title level={3} style={{ marginBottom: 25 }}>
        생산 등록
      </Typography.Title>
      <Spin
        tip="Loading..."
        spinning={loading && !clientData}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {clientData ? (
          <Form
            labelCol={{
              span: 7,
            }}
            wrapperCol={{
              span: 10,
            }}
            layout="horizontal"
            size="large"
            onFinish={onClickHandler}
            autoComplete="off"
          >
            <Form.Item
              label="생산품목"
              name="productionName"
              rules={[
                {
                  required: true,
                  message: '제품명을 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                placeholder="생산 제품명"
                onChange={(e) => onChangeInputHandler('productionName', e)}
              />
            </Form.Item>
            <Form.Item label="브랜드">
              <Input
                name="productionBrandName"
                placeholder="생산 제품 브랜드명"
                onChange={(e) => onChangeInputHandler('productionBrandName', e)}
              />
            </Form.Item>
            <Form.Item
              label="단가"
              name="productionPrice"
              rules={[
                {
                  required: true,
                  message: '제품 단가를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
              initialValue={0}
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
                // parser={(value) => value.replace(/\￦\s?|(,*)/g, '')}
                onChange={(e) => {
                  onChangeInputHandler('productionPrice', {
                    target: { value: e },
                  });
                }}
              />
            </Form.Item>
            <Form.Item
              label="제품수량"
              name="productionQuantity"
              rules={[
                {
                  required: true,
                  message: '제품 수량을 입력해주세요!',
                },
              ]}
              required
              tooltip="제품 수량은 필수 입력 필드입니다"
              initialValue={1}
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
                onChange={(e) =>
                  onChangeInputHandler('productionQuantity', {
                    target: { value: e },
                  })
                }
              />
            </Form.Item>
            <Form.Item name="productionStandardAndUnit" label="규격/단위">
              <div style={{ display: 'flex' }}>
                <Input
                  name="productionStandard"
                  placeholder="생산 제품 규격"
                  onChange={(e) =>
                    onChangeInputHandler('productionStandard', e)
                  }
                  style={{ marginRight: 5 }}
                />
                <Input
                  name="productionUnit"
                  placeholder="ex) mm, cm, yd, ..."
                  onChange={(e) => onChangeInputHandler('productionUnit', e)}
                />
              </div>
            </Form.Item>
            <Form.Item label="비고">
              <TextArea
                name="productionDescription"
                showCount
                maxLength={1000}
                rows={5}
                placeholder="생산 제품 비고"
                onChange={(e) =>
                  onChangeInputHandler('productionDescription', e)
                }
              />
            </Form.Item>
            <Form.Item
              label="시작일자"
              name="productionStartDate"
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
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'productionStartDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
              />
            </Form.Item>
            <Form.Item
              label="출고예정일자"
              name="productionReleasedDate"
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
                onChange={(e) =>
                  onChangeDatePickerHandler(
                    'productionReleasedDate',
                    moment(e).format('YYYY-MM-DD'),
                  )
                }
                disabledDate={disabledDate}
              />
            </Form.Item>
            <Form.Item
              label="거래처코드"
              name="clientId"
              rules={[
                {
                  required: true,
                  message: '거래처 코드를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Select
                placeholder="거래처 코드"
                onChange={(e) => {
                  onChangeClientHandler('clientId', e);
                }}
              >
                {clientData.map((data) => (
                  <Option value={data.clientId} key={data.clientId}>
                    {data.clientName + '(' + data.clientId + ')'}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="파일" getValueFromEvent={normFile}>
              <FileUpload
                onChangeHandler={onChangeHandler}
                preventValue={productionValue}
                fileName={'productionFile'}
              />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: 15 }}
              >
                등록
              </Button>
              <Link to="/staff/production/list">
                <Button type="primary" danger>
                  취소
                </Button>
              </Link>
            </div>
          </Form>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionRegistrationPresenter;
