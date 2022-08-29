import React, { useCallback } from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  DatePicker,
  Spin,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import Swal from 'sweetalert2';

const UpdateMyProfileInfo = ({
  mypage,
  setPage,
  loading,
  error,
  onChangeHandler,
  onUpdateHandler,
}) => {
  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!mypage) return null;
  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        정보 수정
      </Typography.Title>
      {mypage ? (
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
            <Form.Item label="사원 번호">
              <Input disabled value={mypage.employeeId} />
            </Form.Item>
            <Form.Item
              label="이름"
              rules={[
                {
                  required: true,
                  message: '이름을 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="employeeName"
                placeholder="사원 이름"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="새 비밀번호"
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="newPassword"
                placeholder="새 비밀번호"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="새 비밀번호 확인"
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="confirmPassword"
                placeholder="새 비밀번호 확인"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="이메일"
              rules={[
                {
                  required: true,
                  message: '이메일을 입력해주세요!',
                },
              ]}
              required
              tooltip="필수 입력 필드입니다"
            >
              <Input
                name="employeeEmail"
                placeholder="이메일"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              label="전화번호"
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
                name="employeePhone"
                placeholder="전화번호"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item label="주소">
              <Input
                name="employeeAddress"
                placeholder="주소"
                onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item label="입사일자">
              <DatePicker
                placeholder="제품 출고 일자"
                value={
                  mypage.employeeHiredate
                    ? moment(mypage.employeeHiredate)
                    : undefined
                }
                disabled
              />
            </Form.Item>
            <Form.Item label="사원 권한">
              <Input disabled value={mypage.employeeRole} />
            </Form.Item>
            <Form.Item label="사원 이미지" valuePropName="fileList">
              <Upload maxCount={1}>
                <Button icon={<UploadOutlined />}>업로드</Button>
              </Upload>
            </Form.Item>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  margin: 5,
                  backgroundColor: '#FEB139',
                  border: '#FEB139',
                }}
                onClick={() => {
                  onUpdateHandler();
                }}
              >
                수정
              </Button>
            </Form.Item>
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#293462',
                border: '#293462',
              }}
              onClick={() => setPage(true)}
            >
              취소
            </Button>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UpdateMyProfileInfo;
