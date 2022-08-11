import React from 'react';
import { Descriptions } from 'antd';

function StaffStockInfoPresenter({ stock }) {
  return (
    <div>
      <Descriptions title="재고 정보" bordered>
        <Descriptions.Item label="재고 코드" span={3}>
          {stock.stockId}
        </Descriptions.Item>
        <Descriptions.Item label="재고 상품명">
          {stock.stockName}
        </Descriptions.Item>
        <Descriptions.Item label="재고 수량" span={3}>
          {stock.stockQuantity}
        </Descriptions.Item>
        <Descriptions.Item label="비고" span={3}>
          {stock.stockDescription}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions title="창고 정보" bordered>
        <Descriptions.Item label="창고 코드" span={3}>
          {/* {stock.storage.storageId} */}
        </Descriptions.Item>
        <Descriptions.Item label="창고 주소">
          {/* {stock.storage.storageAddress} */}
        </Descriptions.Item>
        <Descriptions.Item label="창고 종류" span={2}>
          {/* {stock.storage.storageCategory} */}
        </Descriptions.Item>
        <Descriptions.Item label="비고" span={2}>
          {/* {stock.storage.storageDescription} */}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default StaffStockInfoPresenter;
