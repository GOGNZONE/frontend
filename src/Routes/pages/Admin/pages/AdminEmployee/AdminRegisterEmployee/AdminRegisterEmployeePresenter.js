import React from 'react';
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

const { Option } = Select;

const AdminRegisterEmployeePresenter = ({
  employeeInfo,
  onChangeHandler,
  saveEmployee,
  fileUpload,
}) => {
  const {
    employeeId,
    employeeName,
    employeePassword,
    employeeEmail,
    employeeAddress,
    employeePhone,
    employeeHiredate,
    employeeImage,
    employeeRole,
  } = employeeInfo;
  console.log(employeeInfo);

  const tailLayout = {
    wrapperCol: {
      offset: 7,
    },
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
      >
        <Form.Item label="사번" required>
          <Input
            name="employeeId"
            value={employeeId}
            placeholder="사번"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="사원 이름" required>
          <Input
            name="employeeName"
            value={employeeName}
            placeholder="사원 이름"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="비밀번호" required>
          <Input
            name="employeePassword"
            value={employeePassword}
            placeholder="비밀번호"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="주소">
          <Input
            name="employeeAddress"
            value={employeeAddress}
            placeholder="주소"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="이메일" required>
          <Input
            name="employeeEmail"
            value={employeeEmail}
            placeholder="이메일"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="전화번호" required>
          <Input
            name="employeePhone"
            value={employeePhone}
            placeholder="전화번호"
            onChange={onChangeHandler}
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
          {/* <DatePicker
            name="employeeHiredate"
            value={employeeHiredate}
            placeholder="입사일"
            onChange={(e) => onChangeHandler(moment(e).format('YYYY-MM-DD'))}
          /> */}
          <Input
            name="employeeHiredate"
            value={employeeHiredate}
            placeholder="입사일"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="사원 권한" required>
          {/* <Select defaultValue="STAFF" onChange={onChangeHandler}>
            <Option value="ADMIN">ADMIN</Option>
            <Option value="STAFF">STAFF</Option>
          </Select> */}
          <Input
            name="employeeRole"
            value={employeeRole}
            placeholder="권한"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="사원 이미지">
          <Upload>
            <Button
              icon={<UploadOutlined />}
              onClick={fileUpload}
              name="employeeImage"
              value={employeeImage}
            >
              업로드
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={saveEmployee}>
            SAVE
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminRegisterEmployeePresenter;
