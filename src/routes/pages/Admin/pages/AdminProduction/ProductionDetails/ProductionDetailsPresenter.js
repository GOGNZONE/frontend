import React, { useCallback, useEffect } from 'react';
import {
  Typography,
  Button,
  Modal,
  Spin,
  Descriptions,
  Drawer,
  Divider,
  Select,
  DatePicker,
  message,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import FileDownload from 'components/FileDownload';
import moment from 'moment';

const { confirm } = Modal;
const { Title, Text } = Typography;
const { Option } = Select;

const ProductionDetailsPresenter = ({
  data,
  loading,
  setSwitchToEditPage,
  setProductionValue,
  showDrawer,
  onClose,
  visible,
  onDeleteProduction,
  onChangeHandler,
  productionValue,
  selectVisible,
  setSelectVisible,
  onClickUpdateProductionProgress,
  setCheckProgress,
  checkProgress,
  storageData,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    setProductionValue(data);
  }, [data, setProductionValue]);

  const onChangeInputHandler = useCallback(
    (name, e) => {
      const { value } = e.target;
      setCheckProgress(value);
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [setCheckProgress, productionValue, onChangeHandler],
  );

  const onChangeDatePickerHandler = useCallback(
    (name, value) => {
      onChangeHandler({
        ...productionValue,
        [name]: value,
      });
    },
    [onChangeHandler, productionValue],
  );

  const onChangeStorageId = useCallback(
    (name, e) => {
      const { value } = e.target;
      onChangeHandler({
        ...productionValue,
        stock: { storage: { [name]: value } },
      });
    },
    [productionValue, onChangeHandler],
  );

  const disabledDate = (current) => {
    return current < moment(productionValue.productionStartDate).endOf('day');
  };

  const showDeleteConfirm = (productionId) => {
    confirm({
      title: '해당 제품을 삭제하시겠습니까?',
      icon: <ExclamationCircleOutlined />,
      okText: '확인',
      okType: 'danger',
      cancelText: '취소',
      onOk() {
        onDeleteProduction(productionId);
      },
    });
  };

  const warning = (value) => {
    if (value === '1') {
      Modal.warning({
        title: '주의',
        content: '생산 중으로 변경 시, 정보 수정이 불가합니다.',
      });
    } else if (value === '2') {
      if (storageData.length === 0) {
        message.loading('', 0.5).then(() => {
          message.warning(
            '등록된 창고가 없습니다. 창고 등록을 먼저 진행해 주세요.',
          );
          navigate('/admin/storage/list');
        });
      }
    }
  };

  return (
    <>
      <Spin
        tip="Loading..."
        spinning={loading && !data}
        size="middle"
        style={{ marginTop: '100px' }}
      >
        {data ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography.Title level={3} style={{ marginBottom: 25 }}>
                생산 상세정보
              </Typography.Title>
              <div>
                {data.productionProgress !== 2 ? (
                  <>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        margin: 5,
                        backgroundColor: '#FEB139',
                        border: '#FEB139',
                      }}
                      onClick={() => {
                        setSwitchToEditPage(false);
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        margin: 5,
                        backgroundColor: '#D61C4E',
                        border: '#D61C4E',
                      }}
                      onClick={() => {
                        showDeleteConfirm(data.productionId);
                      }}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  ''
                )}
                <Link
                  to={
                    data.productionProgress !== 2
                      ? '/admin/production/list'
                      : '/admin/production/list-completed'
                  }
                >
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
            <>
              <Descriptions
                bordered
                labelStyle={{
                  width: '140px',
                  height: '80px',
                  fontSize: '15px',
                }}
                contentStyle={{ width: '160px', fontSize: '15px' }}
                column={3}
              >
                <Descriptions.Item label="생산코드">
                  {data.productionId}
                </Descriptions.Item>
                <Descriptions.Item label="생산품목">
                  {data.productionName}
                </Descriptions.Item>
                <Descriptions.Item label="브랜드">
                  {data.productionBrandName}
                </Descriptions.Item>
                <Descriptions.Item label="제품수량">
                  {data.productionQuantity}
                </Descriptions.Item>
                <Descriptions.Item label="단가" span={2}>
                  {data.productionPrice}원
                </Descriptions.Item>
                <Descriptions.Item label="규격/단위">
                  {data.productionStandard}
                  {data.productionUnit}
                </Descriptions.Item>
                <Descriptions.Item label="진행 상황" span={2}>
                  <div>
                    <Select
                      onChange={(e) => {
                        onChangeInputHandler('productionProgress', {
                          target: { value: e },
                        });
                      }}
                      defaultValue={`${data.productionProgress}`}
                      style={{ marginRight: 7, width: '130px' }}
                      disabled={selectVisible}
                      onSelect={warning}
                    >
                      <Option value="0">생산 시작전</Option>
                      <Option value="1">생산중</Option>
                      <Option value="2">생산 완료</Option>
                    </Select>
                    {data.productionProgress === 2 &&
                      '완료일자 (' + data.productionEndDate + ')'}
                    {checkProgress === '2' ? (
                      <>
                        <DatePicker
                          placeholder="제품 생산 완료 일자"
                          initialvalues={
                            data.productionEndDate
                              ? moment(data.productionEndDate)
                              : undefined
                          }
                          onChange={(e) =>
                            onChangeDatePickerHandler(
                              'productionEndDate',
                              moment(e).format('YYYY-MM-DD'),
                            )
                          }
                          disabledDate={disabledDate}
                          style={{ marginRight: 7 }}
                          disabled={selectVisible}
                        />
                        <Select
                          style={{ marginRight: 7, width: '130px' }}
                          placeholder="창고 선택"
                          onChange={(e) => {
                            onChangeStorageId('storageId', {
                              target: { value: e },
                            });
                          }}
                          disabled={selectVisible}
                        >
                          {storageData.map((storage, index) => {
                            return (
                              <Option
                                value={`${storage.storageId}`}
                                key={`${index}`}
                              >
                                {storage.storageCategory} ({storage.storageId})
                              </Option>
                            );
                          })}
                        </Select>
                      </>
                    ) : (
                      ''
                    )}
                    {data.releases[0] ? (
                      ''
                    ) : selectVisible ? (
                      <Button
                        type="primary"
                        style={{
                          backgroundColor: '#293462',
                          border: '#293462',
                          marginLeft: 5,
                        }}
                        size="default"
                        shape="round"
                        onClick={() => {
                          setSelectVisible(!selectVisible);
                        }}
                      >
                        수정
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        style={{
                          backgroundColor: '#293462',
                          border: '#293462',
                          marginLeft: 5,
                        }}
                        size="default"
                        shape="round"
                        onClick={() => {
                          onClickUpdateProductionProgress();
                        }}
                      >
                        저장
                      </Button>
                    )}
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="시작일자">
                  {data.productionStartDate}
                </Descriptions.Item>
                <Descriptions.Item label="출고예정일자">
                  {data.productionReleasedDate}
                </Descriptions.Item>
                {data.productionProgress === 2 ? (
                  <Descriptions.Item label="출고일자">
                    {data.releases.length === 0 ? (
                      <Text type="danger">출고 정보 없음</Text>
                    ) : (
                      <Text mark>{data.releases[0].releaseDate}</Text>
                    )}
                  </Descriptions.Item>
                ) : (
                  ''
                )}
                <Descriptions.Item label="거래처코드">
                  {data.client.clientName + '(' + data.client.clientId + ')'}
                </Descriptions.Item>
                {data.productionProgress === 2 ? (
                  <Descriptions.Item label="창고정보" span={2}>
                    {data.stock.storage.storageCategory}(
                    {data.stock.storage.storageId}) /{' '}
                    {data.stock.storage.storageAddress}
                  </Descriptions.Item>
                ) : (
                  ''
                )}
                <Descriptions.Item label="비고" span={3}>
                  {data.productionDescription}
                </Descriptions.Item>
                <Descriptions.Item label="첨부파일" span={3}>
                  <FileDownload file={data.productionFile} />
                </Descriptions.Item>
                {data.productionProgress === 2 ? (
                  <Descriptions.Item label="출고" span={3}>
                    {data.releases.length === 0 ? (
                      <Link
                        to={`/admin/production/release/${data.productionId}`}
                      >
                        <Button
                          type="primary"
                          style={{
                            backgroundColor: '#293462',
                            border: '#293462',
                          }}
                        >
                          등록
                        </Button>
                      </Link>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {data.releases.map((release) => {
                          return (
                            <div key={release.releaseId}>
                              {release.releaseDate}
                            </div>
                          );
                        })}
                        <Button
                          type="primary"
                          ghost
                          onClick={showDrawer}
                          style={{ marginLeft: 15 }}
                        >
                          조회
                        </Button>
                        {/* Start Drawer */}
                        <Drawer
                          width={500}
                          placement="right"
                          closable={false}
                          onClose={onClose}
                          visible={visible}
                        >
                          <div
                            className="site-description-item-profile-p"
                            style={{
                              marginBottom: 24,
                            }}
                          >
                            <Title level={3}>
                              {data.productionName} 출고정보
                            </Title>
                          </div>
                          <div className="site-description-item-profile-p">
                            <Title level={5}>
                              <Text mark>출고내역</Text>
                            </Title>
                          </div>
                          <Descriptions
                            bordered
                            labelStyle={{ width: '140px' }}
                            column={1}
                          >
                            <Descriptions.Item label="출고코드">
                              {data.releases[0].releaseId}
                            </Descriptions.Item>
                            <Descriptions.Item label="출고일자">
                              {data.releases[0].releaseDate}
                            </Descriptions.Item>
                            <Descriptions.Item label="수량">
                              {data.releases[0].releaseQuantity}
                            </Descriptions.Item>
                            <Descriptions.Item label="공급가액(합계)">
                              {data.releases[0].releaseTotalPrice}
                            </Descriptions.Item>
                            <Descriptions.Item label="출고방식">
                              {data.releases[0].releaseType}
                            </Descriptions.Item>
                            <Descriptions.Item label="비고">
                              {data.releases[0].releaseDescription}
                            </Descriptions.Item>
                            <Descriptions.Item label="배송정보">
                              {data.releases[0].delivery === null ? (
                                <Text type="danger">배송 정보 없음</Text>
                              ) : (
                                <Text>
                                  {
                                    data.releases[0].delivery
                                      .deliveryCompanyName
                                  }
                                  /
                                  {
                                    data.releases[0].delivery
                                      .deliveryTrackingNumber
                                  }
                                </Text>
                              )}
                            </Descriptions.Item>
                          </Descriptions>
                          <Divider />
                          <div className="site-description-item-profile-p">
                            <Title level={5}>
                              <Text style={{ backgroundColor: '#E9DAC1' }}>
                                거래처정보
                              </Text>
                            </Title>
                          </div>
                          <Descriptions
                            bordered
                            labelStyle={{ width: '140px' }}
                            column={1}
                          >
                            <Descriptions.Item label="거래처코드">
                              {data.client.clientId}
                            </Descriptions.Item>
                            <Descriptions.Item label="거래처명">
                              {data.client.clientName}
                            </Descriptions.Item>
                            <Descriptions.Item label="담당자">
                              {data.client.clientManager}
                            </Descriptions.Item>
                            <Descriptions.Item label="연락처">
                              {data.client.clientTel}
                            </Descriptions.Item>
                            <Descriptions.Item label="주소">
                              {data.client.clientAddress}
                            </Descriptions.Item>
                            <Descriptions.Item label="담당자(자사)">
                              {data.client.employeeName}
                            </Descriptions.Item>
                          </Descriptions>
                        </Drawer>
                        {/* End Drawer */}
                      </div>
                    )}
                  </Descriptions.Item>
                ) : (
                  ''
                )}
              </Descriptions>
            </>
          </>
        ) : (
          ''
        )}
      </Spin>
    </>
  );
};

export default ProductionDetailsPresenter;
