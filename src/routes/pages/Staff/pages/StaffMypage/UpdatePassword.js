import React, { useState } from 'react';
import { Button, Input, Form, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { updatePassword } from 'store/modules/employee/employeeActions';
import Swal from 'sweetalert2';

const UpdatePassword = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onResetHandler = () => {
    window.location.reload();
  };

  const onUpdatePassword = async () => {
    const { newPassword, confirmPassword } = inputValue;
    if (newPassword && newPassword === confirmPassword) {
      await dispatch(updatePassword(newPassword));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '수정완료',
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '비밀번호를 확인하세요',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => setModalOpen(true)}
        style={{
          marginRight: 5,
          backgroundColor: '#A2B5BB',
          borderColor: '#A2B5BB',
        }}
      >
        비밀번호 재설정
      </Button>
      <Modal
        title="비밀번호 재설정"
        style={{
          top: 100,
        }}
        visible={modalOpen}
        onOk={() => onUpdatePassword()}
        onCancel={() => {
          onResetHandler();
        }}
        okText="확인"
        cancelText="취소"
        width={600}
      >
        <Form
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          size="large"
        >
          <Input
            name="newPassword"
            placeholder="새 비밀번호"
            onChange={onChangeHandler}
            type="password"
            style={{ marginBottom: '20px' }}
          />
          <Input
            name="confirmPassword"
            placeholder="비밀번호 확인"
            onChange={onChangeHandler}
            type="password"
          />
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePassword;
