import React from 'react';
import { Badge, Descriptions } from 'antd';
const StaffStorageInfoPresenter = () => {
  return (
    <div>
      <Descriptions title="창고 정보" bordered>
        <Descriptions.Item label="창고 코드" span={3}>
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="창고 주소" span={2}>
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="창고 종류" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="비고" span={2}>
          Running
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default StaffStorageInfoPresenter;
