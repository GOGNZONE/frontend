import React from 'react';
import { Form, Input, Button, Typography, Select } from 'antd';
import { Link } from 'react-router-dom';
import Loading from 'Components/Loading';

const { Option } = Select;

const AdminRegisterClientPresenter = ({
  clientInfo,
  employeeList,
  loading,
  error,
  saveClient,
  onChangeInputHandler,
  onChangeEmployeeHandler,
  onResetHandler,
}) => {
  const { clientName, clientManager, clientAddress, clientTel } = clientInfo;

  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }}
    >
      <Loading loading={loading} error={error} data={employeeList} />
    </div>
  ) : (
    <div>
      <Typography.Title level={3} style={{ margin: 5 }}>
        거래처 등록
      </Typography.Title>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        size="large"
        onFinish={saveClient}
        autoComplete="off"
      >
        <Form.Item
          label="거래처 이름"
          name="clientName"
          rules={[
            {
              required: true,
              message: '거래처 이름을 입력해주세요',
            },
          ]}
          required
        >
          <Input
            placeholder="거래처 이름"
            onChange={(e) => onChangeInputHandler('clientName', e)}
            value={clientName}
          />
        </Form.Item>
        <Form.Item
          label="매니저 이름"
          name="clientManger"
          rules={[
            {
              required: true,
              message: '매니저 이름을 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="매니저 이름"
            onChange={(e) => onChangeInputHandler('clientManager', e)}
            value={clientManager}
          />
        </Form.Item>
        <Form.Item
          label="주소"
          name="clientAddress"
          rules={[
            {
              required: true,
              message: '주소를 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="주소"
            onChange={(e) => onChangeInputHandler('clientAddress', e)}
            value={clientAddress}
          />
        </Form.Item>
        <Form.Item
          label="전화번호"
          name="clientTel"
          rules={[
            {
              required: true,
              message: '전화번호를 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="전화번호"
            onChange={(e) => onChangeInputHandler('clientTel', e)}
            value={clientTel}
            type="tel"
          />
        </Form.Item>
        <Form.Item
          label="담당 사원"
          name="employeeRole"
          rules={[
            {
              required: true,
              message: '담당사원을 입력해주세요!',
            },
          ]}
          required
        >
          <Select
            placeholder="담당사원 코드"
            onChange={(e) => {
              onChangeEmployeeHandler(e);
            }}
          >
            {employeeList.map((employee) => (
              <Option key={employee.employeeId} value={employee.employeeId}>
                {employee.employeeName}({employee.employeeId})
              </Option>
            ))}
          </Select>
        </Form.Item>
        {/* <Form.Item label="거래처 관련파일">
          <Upload>
            <Button icon={<UploadOutlined />} onClick={fileUpload}>
              업로드
            </Button>
          </Upload>
        </Form.Item> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Button type="primary" style={{ marginRight: '15px' }}>
            <Link to="/admin/client/list">목록</Link>
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: '15px' }}
          >
            저장
          </Button>
          <Button type="primary" onClick={onResetHandler} danger>
            취소
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdminRegisterClientPresenter;
