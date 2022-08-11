import React from 'react';
import { Descriptions } from 'antd';

function StaffOrderInfoPresenter({ order }) {
  return (
    <div>
      <Descriptions title="주문 상세 정보" bordered>
        <Descriptions.Item label="주문 코드" span={3}>
          {order.orderId}
        </Descriptions.Item>
        <Descriptions.Item label="주문 상품명">
          {order.orderProductionName}
        </Descriptions.Item>
        <Descriptions.Item label="주문 상품 브랜드명">
          {order.orderProductionBrandName}
        </Descriptions.Item>
        <Descriptions.Item label="주문 상품 가격">
          {order.orderProductionPrice}
        </Descriptions.Item>
        <Descriptions.Item label="주문 수량">
          {order.orderProductionQuantity}
        </Descriptions.Item>
        <Descriptions.Item label="주문 파일">
          {order.orderProuctionFile}
        </Descriptions.Item>
        <Descriptions.Item label="주문 규격">
          {order.orderProductionStandard}
        </Descriptions.Item>
        <Descriptions.Item label="주문 규격 단위">
          {order.orderProductionUnit}
        </Descriptions.Item>
        <Descriptions.Item label="비고">
          {order.orderProductionDescription}
        </Descriptions.Item>
        <Descriptions.Item label="주문 마감 일자">
          {order.orderProductionEndDate}
        </Descriptions.Item>
        <Descriptions.Item label="주문일">{order.orderDate}</Descriptions.Item>
        <Descriptions.Item label="거래처"></Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default StaffOrderInfoPresenter;
