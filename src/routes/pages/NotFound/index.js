import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="찾을 수 없는 페이지 입니다."
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
