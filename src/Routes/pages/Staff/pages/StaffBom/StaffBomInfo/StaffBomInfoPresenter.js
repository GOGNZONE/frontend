import React from 'react';
import { Descriptions } from 'antd';

function StaffBomInfoPresenter({ bom }) {
  console.log(bom);
  return (
    <div>
      <Descriptions title="재고 정보" bordered>
        <Descriptions.Item label="코드" span={3}>
          {bom.bomId}
        </Descriptions.Item>
        <Descriptions.Item label="이름">{bom.bomName}</Descriptions.Item>
        <Descriptions.Item label="수량">{bom.bomQuantity}</Descriptions.Item>
        <Descriptions.Item label="가격">{bom.bomPrice}</Descriptions.Item>
        <Descriptions.Item label="규격">{bom.bomStandard}</Descriptions.Item>
        <Descriptions.Item label="비고">{bom.bomDescription}</Descriptions.Item>
        <Descriptions.Item label="받은날짜">
          {bom.bomReceivedDate}
        </Descriptions.Item>
        <Descriptions.Item label="파일">{bom.bomFile}</Descriptions.Item>
        <Descriptions.Item label="필요수량">
          {bom.bomRequiredQuntity}
        </Descriptions.Item>
        <Descriptions.Item label="부모ID">
          {/* {bom.bomParent.bomId} */}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
export default StaffBomInfoPresenter;
