import React, { useCallback, useState } from 'react';
import {
  Typography,
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  DatePicker,
  Upload,
  Space,
  Spin,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const { TextArea } = Input;
const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const standardSelectAfter = (
  <Select defaultValue="mm" className="standard-select-after">
    <Option value="mm">mm</Option>
    <Option value="cm">cm</Option>
  </Select>
);

const ProductionUpdatePresenter = ({
  data,
  loading,
  setSwitchToEditPage,
  onClickHandler,
  productionValue,
  onChangeHandler,
}) => {
  const [fileList, setFileList] = useState([]);
  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...productionValue,
      [name]: value,
    });
  });

  const token = localStorage.getItem('ACCESS_TOKEN');

  const props = {
    action: '/api/file/upload',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },

    onStart(file) {
      console.log('onStart', file, file.name);
    },
    onSuccess(response, file) {
      console.log('onSuccess', response, file.name);
    },
    onError(error) {
      console.log('onError', error);
    },
    onProgress({ percent }, file) {
      console.log('onProgress', `${percent}%`, file.name);
    },

    customRequest({
      action,
      data,
      file,
      filename,
      headers,
      onError,
      onProgress,
      onSuccess,
    }) {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      if (data) {
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
      }
      formData.append(filename, file);

      console.log('file', file);

      axios
        .post(action, formData, {
          headers,
          onUploadProgress: ({ loaded, total }) =>
            onProgress({ percent: (loaded / total) * 100 }, file),
        })
        .then(({ data: response }) => {
          onSuccess(response, file);
        })
        .catch(onError);

      return {
        abort() {
          console.log('upload progress is aborted.');
        },
      };
    },

    onChange({ file, fileList, onProgress }) {
      const newFileList = fileList.slice(-1);
      setFileList(newFileList);
      console.log(file.status);

      console.log(onProgress);

      if (file.status === 'done') {
        message.success(`${file.name}이 성공적으로 등록되었습니다.`);
      } else if (file.status === 'error') {
        message.error(`${file.name}이 업로드에 실패했습니다.`);
      }
      onChangeHandler({
        ...productionValue,
        productionFile: file.name,
      });
    },
  };

  const onDownloadClick = () => {
    axios({
      method: 'GET',
      url: '/api/file/download/예영이의 편지.txt',
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: res.headers['content-type'] }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `letter.txt`);
      document.body.appendChild(link);
      link.click();
    });
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
                />
              </Form.Item>
              <Form.Item
                label="제품수량/단위"
                rules={[
                  {
                    required: true,
                    message: '제품 수량을 입력해주세요!',
                  },
                ]}
                required
                tooltip="제품 수량은 필수 입력 필드입니다"
              >
                <Space>
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
                  />
                  <Input
                    name="productionUnit"
                    placeholder="ex. mm, cm, yd, ..."
                    defaultValue={data.productionUnit}
                    onChange={(e) => onChangeInputHandler('productionUnit', e)}
                  />
                </Space>
              </Form.Item>
              <Form.Item label="규격">
                <Input
                  name="productionStandard"
                  addonAfter={standardSelectAfter}
                  placeholder="생산 제품 규격"
                  defaultValue={data.productionStandard}
                  onChange={(e) =>
                    onChangeInputHandler('productionStandard', e)
                  }
                />
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
                />
              </Form.Item>
              {/* <Form.Item
                label="출고일자"
                rules={[
                  {
                    required: true,
                    message: '출고일자를 입력해주세요!',
                  },
                ]}
                required
                tooltip="필수 입력 필드입니다"
              >
                <DatePicker
                  placeholder="제품 출고 일자"
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
                />
              </Form.Item> */}
              <Form.Item label="생성일자">
                <DatePicker
                  placeholder="제품 생성 일자"
                  defaultValue={
                    data.productionDate
                      ? moment(data.productionDate)
                      : undefined
                  }
                  disabled={true}
                />
              </Form.Item>
              <Form.Item
                name="clientId"
                label="거래처코드"
                initialValue={
                  data.client.clientName + '(' + data.client.clientId + ')'
                }
              >
                <Select disabled={true}></Select>
              </Form.Item>
              <Form.Item
                label="파일"
                // valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload fileList={fileList} {...props} maxCount={1}>
                  <Button icon={<UploadOutlined />}>업로드</Button>
                </Upload>
              </Form.Item>

              <Button icon={<UploadOutlined />} onClick={onDownloadClick}>
                다운로드
              </Button>
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
