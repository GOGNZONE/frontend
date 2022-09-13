import React, { useState } from 'react';
import { Descriptions, Col, Row, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

function AdminStockInfoPresenter({ data, changePageHandler, onDeleteHandler }) {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      {data ? (
        <>
          <Row align="middle" gutter={6}>
            <Col flex={4}>
              <Descriptions title="재고 정보" bordered column={2}>
                <Descriptions.Item label="재고 코드">
                  {data.stockId}
                </Descriptions.Item>
                <Descriptions.Item label="재고 상품명">
                  {data.stockName}
                </Descriptions.Item>
                <Descriptions.Item label="재고 수량">
                  {data.stockQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.stockDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <br />
          <Row align="middle" gutter={6}>
            <Col flex={4}>
              <Descriptions title="보관 창고 정보" bordered column={2}>
                <Descriptions.Item label="창고 번호">
                  {data.storage.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="창고 주소">
                  {data.storage.storageAddress}
                </Descriptions.Item>
                <Descriptions.Item label="창고 종류">
                  {data.storage.storageCategory}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.storage.storageDescription}
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
              onOk={() => onDeleteHandler(data.stock)}
              okText="삭제"
              onCancel={() => setDeleteModal(false)}
              cancelText="취소"
            >
              <p>정말로 삭제하시겠습니까?</p>
            </Modal>
            <Link to="/admin/stock/list">
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
}

export default AdminStockInfoPresenter;
