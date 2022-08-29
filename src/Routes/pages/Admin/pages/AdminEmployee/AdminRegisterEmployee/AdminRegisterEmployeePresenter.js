import React, { useCallback } from 'react';
import {
  Form,
  Input,
  Button,
  Typography,
  DatePicker,
  Upload,
  Select,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';

const { Option } = Select;

const AdminRegisterEmployeePresenter = ({
  employeeInfo,
  onChangeHandler,
  saveEmployee,
  fileUpload,
}) => {
  const tailLayout = {
    wrapperCol: {
      offset: 7,
    },
  };
  const {
    employeeId,
    employeeName,
    employeePassword,
    employeeAddress,
    employeeEmail,
    employeePhone,
    employeeRole,
  } = employeeInfo;

  const onChangeInputHandler = useCallback((name, e) => {
    const { value } = e.target;
    onChangeHandler({
      ...employeeInfo,
      [name]: value,
    });
  });

  const onChangeDatePickerHandler = useCallback((name, value) => {
    onChangeHandler({
      ...employeeInfo,
      [name]: value,
    });
  });

  const onChangeEmployeeRole = useCallback((value) => {
    onChangeHandler({
      ...employeeInfo,
      employeeRole: value,
    });
  });

  const onResetHandler = () => {
    onChangeHandler({
      employeeId: '',
      employeeName: '',
      employeePassword: '',
      employeeAddress: '',
      employeeEmail: '',
      employeePhone: '',
      employeeHiredate: '',
      employeeImage: '',
      employeeRole: '',
    });
  };

  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        사원 등록
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
        onFinish={saveEmployee}
        autoComplete="off"
      >
        <Form.Item
          label="사번"
          name="employeeId"
          rules={[
            {
              required: true,
              message: '사번을 입력해주세요',
            },
          ]}
          required
        >
          <Input
            placeholder="사번"
            onChange={(e) => onChangeInputHandler('employeeId', e)}
            value={employeeId}
          />
        </Form.Item>
        <Form.Item
          label="사원 이름"
          name="employeeName"
          rules={[
            {
              required: true,
              message: '사원이름을 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="사원 이름"
            onChange={(e) => onChangeInputHandler('employeeName', e)}
            value={employeeName}
          />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="employeePassowrd"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="비밀번호"
            onChange={(e) => onChangeInputHandler('employeePassword', e)}
            type="password"
            value={employeePassword}
          />
        </Form.Item>
        <Form.Item label="주소">
          <Input
            placeholder="주소"
            onChange={(e) => onChangeInputHandler('employeeAddress', e)}
            value={employeeAddress}
          />
        </Form.Item>
        <Form.Item
          label="이메일"
          name="employeeEmail"
          rules={[
            {
              required: true,
              message: '이메일을 입력해주세요!',
            },
          ]}
          required
        >
          <Input
            placeholder="이메일"
            onChange={(e) => onChangeInputHandler('employeeEmail', e)}
            type="email"
            value={employeeEmail}
          />
        </Form.Item>
        <Form.Item
          label="전화번호"
          name="employeePhone"
          rules={[
            {
              required: true,
              message: '전화번호를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <Input
            placeholder="전화번호"
            onChange={(e) => onChangeInputHandler('employeePhone', e)}
            value={employeePhone}
          />
        </Form.Item>
        <Form.Item
          name="employeeHiredate"
          label="입사일"
          rules={[
            {
              required: true,
              message: '입사 일자를 입력해주세요!',
            },
          ]}
          required
          tooltip="필수 입력 필드입니다"
        >
          <DatePicker
            placeholder="입사일"
            size="large"
            onChange={(e) =>
              onChangeDatePickerHandler(
                'employeeHiredate',
                moment(e).format('YYYY-MM-DD'),
              )
            }
          />
        </Form.Item>
        <Form.Item
          label="사원 권한"
          name="employeeRole"
          rules={[
            {
              required: true,
              message: '사원 권한을 입력해주세요!',
            },
          ]}
          required
        >
          <Select
            defaultValue="선택하세요"
            onChange={(e) => onChangeEmployeeRole(e)}
            value={employeeRole}
          >
            <Option value="ADMIN">ADMIN</Option>
            <Option value="STAFF">STAFF</Option>
          </Select>
        </Form.Item>
        <Form.Item label="사원 이미지">
          <Upload>
            <Button icon={<UploadOutlined />} onClick={fileUpload}>
              업로드
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" style={{ marginRight: '15px' }}>
            <Link to="/admin/employee/list">목록</Link>
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
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminRegisterEmployeePresenter;
