import React, { useState } from 'react';
import { Descriptions, Col, Row, Modal, Button } from 'antd';
import { Link } from 'react-router-dom';

function AdminOrderInfoPresenter({ data, changePageHandler, onDeleteHandler }) {
  const [deleteModal, setDeleteModal] = useState(false);

  const print = (data, id) => {
    const beforePrint = () => {
      document.body.innerHTML = document.getElementById(data).innerHTML;
    };

    const afterPrint = () => {
      window.location.reload();
    };

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    window.print();
  };

  return (
    <>
      {data ? (
        <>
          <div id="data">
            <Row align="middle" gutter={8}>
              <Col flex={4}>
                <Descriptions title="발주 상세 정보" bordered column={2}>
                  <Descriptions.Item label="주문 제품 코드">
                    {data.orderId}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품명">
                    {data.orderProductionName}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 브랜드명">
                    {data.orderProductionBrandName}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 단가">
                    {data.orderProductionPrice}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 수량">
                    {data.orderProductionQuantity}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 규격">
                    {data.orderProductionStandard}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 규격 단위">
                    {data.orderProductionUnit}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 생성 일자">
                    {data.orderDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="주문 제품 마감 일자">
                    {data.orderProductionEndDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="비고">
                    {data.orderProductionDescription}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <body onLoad="window.print()" /> */}
            <Button
              onClick={() => print('data', data.orderId)}
              style={{
                margin: 5,
              }}
            >
              인쇄
            </Button>

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
            >
              삭제
            </Button>
            <Modal
              title="삭제"
              centered
              visible={deleteModal}
              onOk={() => onDeleteHandler(data.orderId)}
              okText="삭제"
              onCancel={() => setDeleteModal(false)}
              cancelText="취소"
            >
              <p>정말로 삭제하시겠습니까?</p>
            </Modal>
            <div id="list">
              <Link to="/admin/order/list">
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
          </div>
        </>
      ) : (
        <div>data loading...</div>
      )}
    </>
  );
}

export default AdminOrderInfoPresenter;
