import React, { useState } from 'react';
import { Descriptions, Col, Row, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import KakaoMap from 'components/KakaoMap';
function AdminStorageInfoPresenter({
  changePageHandler,
  data,
  onDeleteHandler,
}) {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      {data ? (
        <div>
          <Row align="middle">
            <Col flex={4}>
              <Descriptions title="창고 상세 정보" bordered column={2}>
                <Descriptions.Item label="창고 코드">
                  {data.storageId}
                </Descriptions.Item>
                <Descriptions.Item label="창고 주소">
                  {data.storageAddress}
                </Descriptions.Item>
                <Descriptions.Item label="창고 유형">
                  {data.storageCategory}
                </Descriptions.Item>
                <Descriptions.Item label="비고">
                  {data.storageDescription}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '10px',
            }}
          >
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
              onClick={() => {
                setDeleteModal(true);
              }}
            >
              삭제
            </Button>
            <Modal
              title="삭제"
              centered
              visible={deleteModal}
              onOk={() => onDeleteHandler(data.storageId)}
              okText="삭제"
              onCancel={() => setDeleteModal(false)}
              cancelText="취소"
            >
              <p>정말로 삭제하시겠습니까?</p>
            </Modal>

            <Link to="/admin/storage/list">
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
          <KakaoMap
            address={data.storageAddress}
            category={data.storageCategory}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default AdminStorageInfoPresenter;
