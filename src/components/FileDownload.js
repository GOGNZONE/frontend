import React from 'react';
import { Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

const FileDownload = ({ file }) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const onDownloadClick = async () => {
    await axios({
      method: 'GET',
      url: `/api/file/download/${file}`,
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
      link.setAttribute('download', `${file}`);
      document.body.appendChild(link);
      link.click();
    });
  };
  return (
    <a onClick={() => onDownloadClick()}>
      <Text underline style={{ color: '#1890FF' }}>
        {file ? file.substring(file.lastIndexOf('_') + 1) : ''}
        {/* {file} */}
      </Text>
    </a>
  );
};

export default FileDownload;
