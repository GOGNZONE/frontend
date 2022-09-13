import React, { useState } from 'react';
import { Descriptions, Col, Row, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const AdminBomInfoPresenter = ({
  data,
  changePageHandler,
  onDeleteHandler,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={8}>
            <Col flex={4}>
              <Descriptions title="원자재 상세 정보" bordered>
                <Descriptions.Item label="원자재 제품 코드">
                  {data.bomId}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 제품명" span={2}>
                  {data.bomName}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 재고 수량">
                  {data.bomQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 단가" span={2}>
                  {data.bomPrice}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 규격" span={3}>
                  {data.bomStandard}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 규격 단위" span={3}>
                  {data.bomUnit}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 입고 일자">
                  {data.bomReceivedDate}
                </Descriptions.Item>
                <Descriptions.Item label="부모 객체">
                  {data.bomParent == null ? '없음' : data.bomParent.bomId}
                </Descriptions.Item>
                <Descriptions.Item label="창고 번호">
                  {data.storage.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="원자재 관련 파일">
                  {data.bomFile}
                </Descriptions.Item>
                <Descriptions.Item label="비고">{data.bomId}</Descriptions.Item>
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
            <Button
              type="primary"
              size="middle"
              style={{
                backgroundColor: '#D61C4E',
                margin: 5,
                border: '#D61C4E',
              }}
              onClick={() => setDeleteModal(true)}
              // onClick={() => {
              //   onDeleteHandler();
              // }}
            >
              삭제
            </Button>
            <Modal
              title="삭제"
              centered
              visible={deleteModal}
              onOk={() => onDeleteHandler(data.bomId)}
              okText="삭제"
              onCancel={() => setDeleteModal(false)}
              cancelText="취소"
            >
              <p>정말로 삭제하시겠습니까?</p>
            </Modal>
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
        <div>data loading...</div>
      )}
    </>
  );
};

export default React.memo(AdminBomInfoPresenter);
