import React from 'react';
import { Badge, Descriptions } from 'antd';

const StaffStorageInfoPresenter = ({ storage }) => {
  return (
    <div>
      <Descriptions title="창고 정보" bordered>
        <Descriptions.Item label="창고 코드" span={3}>
          {storage.storageId}
        </Descriptions.Item>
        <Descriptions.Item label="재고명" span={2}>
          {storage.storageAddress}
        </Descriptions.Item>
        <Descriptions.Item label="재고 수량" span={2}>
          {storage.storageCategory}
        </Descriptions.Item>
        <Descriptions.Item label="비고" span={2}>
          {storage.storageDescription}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default StaffStorageInfoPresenter;
