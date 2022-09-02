import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Upload, Button, message } from 'antd';

const FileUpload = ({ onChangeHandler, productionValue }) => {
  const token = localStorage.getItem('ACCESS_TOKEN');

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
        ...productionValue,
        productionFile: info.file.name,
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
      formData.append(filename, file);

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
    <Upload {...props} maxCount={1}>
      <Button icon={<UploadOutlined />}>업로드</Button>
    </Upload>
  );
};

export default FileUpload;
