import React from 'react';
import { Descriptions, Col, Row, Spin, Button } from 'antd';
import { Link } from 'react-router-dom';

const AdminBomInfoPresenter = ({ changePageHandler, data }) => {
  console.log(data);
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={8}>
            <Col flex={4}>
              <Descriptions title="마이페이지" bordered>
                <Descriptions.Item label="원자재 제품 코드">
                  {data.bomId}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 제품명" span={2}>
                  {data.bomName}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 재고 수량">
                  {data.bomQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 단가" span={3}>
                  {data.bomPrice}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 규격" span={1}>
                  {data.bomStandard}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 규격 단위" span={2}>
                  {data.bomUnit}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 입고 일자" span={3}>
                  {data.bomReceivedDate}
                </Descriptions.Item>
                <Descriptions.Item label="창고 번호">
                  {data.storage.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="부모 객체">
                  {data.bom == null ? '없음' : data.bom.bomId}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 관련 파일">
                  {data.bomFile}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.bomDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="primary"
              style={{
                margin: 5,
                border: '#293462',
              }}
              onClick={changePageHandler}
            >
              정보 수정
            </Button>
            <Link to="/admin/bom/list">
              <Button
                type="primary"
                style={{
                  margin: 5,
                  backgroundColor: '#293462',
                  border: '#293462',
                }}
              >
                목록
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default React.memo(AdminBomInfoPresenter);
