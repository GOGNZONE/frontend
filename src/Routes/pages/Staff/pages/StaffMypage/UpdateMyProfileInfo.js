import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UpdateMyProfileInfo = ({
  mypage,
  updateMyProfile,
  setPage,
  onChangeHandler,
  onUpdateHandler,
  onResetInput,
}) => {
  const {
    employeeName,
    employeeEmail,
    employeeAddress,
    employeePhone,
    employeeImage,
    newPassword,
    confirmPassword,
  } = updateMyProfile;

  const { employeeId, employeeHiredate, employeeRole } = mypage;

  console.log(mypage);

  const tailLayout = {
    wrapperCol: {
      offset: 7,
    },
  };

  return (
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
        <Form.Item label="사번">
          <Input
            name="employeeId"
            value={employeeId}
            placeholder="사번"
            disabled
          />
        </Form.Item>
        <Form.Item label="이름" required>
          <Input
            name="employeeName"
            value={employeeName}
            placeholder="사원 이름"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item label="신규 비밀번호" required>
          <Input
            name="newPassword"
            value={newPassword}
            placeholder="신규 비밀번호"
            onChange={onChangeHandler}
            type="password"
          />
        </Form.Item>
        <Form.Item label="신규 비밀번호 확인" required>
          <Input
            name="confirmPassword"
            value={confirmPassword}
            placeholder="신규 비밀번호 확인"
            onChange={onChangeHandler}
            type="password"
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
            type="email"
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
        <Form.Item name="employeeHiredate" label="입사일">
          <Input
            name="employeeHiredate"
            type="date"
            value={employeeHiredate}
            placeholder="입사일"
            disabled
          />
        </Form.Item>
        <Form.Item label="사원 권한">
          <Input name="employeeRole" value={employeeRole} disabled />
        </Form.Item>
        <Form.Item label="사원 이미지">
          <Upload>
            <Button
              icon={<UploadOutlined />}
              // onClick={fileUpload}
              name="employeeImage"
              value={employeeImage}
            >
              업로드
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            onClick={onUpdateHandler}
            style={{ marginRight: '15px' }}
          >
            저장
          </Button>
          <Button
            type="primary"
            onClick={onResetInput}
            style={{ marginRight: '15px' }}
          >
            취소
          </Button>
          <Button type="primary" onClick={() => setPage(true)}>
            마이페이지
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateMyProfileInfo;
