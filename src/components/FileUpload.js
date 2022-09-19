import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Upload, Button, message, Descriptions } from 'antd';

const FileUpload = ({ onChangeHandler, preventValue, fileName }) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const codeNumber = Date.now();
  const props = {
    name: 'file',
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

    onChange(info) {
      if (info.file.status === 'uploading') {
        info.file.status = 'done';
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name}이 성공적으로 등록되었습니다.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name}이 업로드에 실패했습니다.`);
      }

      onChangeHandler({
        ...preventValue,
        [fileName]: codeNumber + '_' + info.file.name,
      });
    },

    async customRequest({
      action,
      data,
      file,
      filename,
      headers,
      onError,
      onSuccess,
    }) {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      if (data) {
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
      }
      formData.append(filename, file, codeNumber + '_' + file.name);

      await axios
        .post(action, formData, {
          headers,
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
  };
  return (
    <>
      <Upload {...props} maxCount={1} accept=".jpg, .png, .zip">
        <Button icon={<UploadOutlined />}>업로드</Button>
      </Upload>
      <Descriptions.Item>image 또는 zip파일 업로드</Descriptions.Item>
    </>
  );
};

export default FileUpload;
