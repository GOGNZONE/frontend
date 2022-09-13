import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/plots';
import {
  Calendar,
  Typography,
  Spin,
  Col,
  Row,
  Alert,
  Tag,
  Card,
  Collapse,
  Empty,
} from 'antd';
import moment from 'moment';
import './adminDashBoard.css';
import { CheckOutlined } from '@ant-design/icons';
import PieChart from './components/PieChart';
import { isRejected } from '@reduxjs/toolkit';

const { Title } = Typography;
const { Panel } = Collapse;

moment.updateLocale('en', {
  weekdaysMin: ['일', '월', '화', '수', '목', '금', '토'],
});

const AdminDashBoardPresenter = ({
  dataSource,
  loading,
  releaseConfirmedList,
  setReleaseConfirmedList,
  value,
  setValue,
  selectedValue,
  setSelectedValue,
  year,
  month,
  clientData,
}) => {
  console.log(dataSource);
  // console.log(clientData);
  let dateList;
  useEffect(() => {
    setReleaseConfirmedList(
      dataSource?.filter((data) => data.releaseConfirmed === 1),
    );
    // setColumnChartData(clientData);
  }, [dataSource]);

  /***** Calendar START *****/

  if (dataSource) {
    dateList = releaseConfirmedList?.map((data) => data.releaseDate);
  }

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const getListData = (value) => {
    let listData = [];

    if (dateList) {
      const result = dateList.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
      }, {});

      Object.keys(result).map((x, index) => {
        if (x === value.format('YYYY-MM-DD'))
          listData.push({ count: Object.values(result)[index] });
      });
    }

    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return listData.map((item, index) => (
      <Tag key={index} icon={<CheckOutlined />} color="#cd201f">
        출고확정 {item.count}건
      </Tag>
    ));
  };

  /***** Calendar END *****/

  /***** Column Chart START ******/

  let data = [];

  if (releaseConfirmedList) {
    releaseConfirmedList.map((d) =>
      data.push({ type: d.client.clientName, sales: d.releaseTotalPrice }),
    );
  }

  const arrUnique = [...new Set(data)];
  console.log(arrUnique);

  // .reduce((prev, current) => prev + current, 0);

  // let resultArr = [];
  // let flag = false;
  // let cnt = 0;
  // for (let i = 0; i < data.length; i++) {
  //   cnt = 0;
  //   flag = false;
  //   for (value in resultArr) {
  //     if (resultArr[value].type === data[i].type) {
  //       flag = true;
  //     }
  //     if (flag) {
  //       ++cnt;
  //       resultArr[value].sales += data[i].sales;
  //     }
  //   }
  //   if (cnt === 0) {
  //     console.log(data[i]);
  //     // setResultArr(...resultArr, data[i]);
  //     // resultArr.push(data[i]);
  //   }
  // }
  // console.log(resultArr);

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '거래처',
      },
      sales: {
        alias: '매출',
      },
    },
  };

  /***** Column Chart END ******/

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Title level={4}>
            {year}년 {month}월 출고일정
          </Title>
          <Row>
            <Col span={16}>
              <Calendar
                // headerRender={() => {}}
                dateCellRender={dateCellRender}
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
              />
            </Col>
            <Col span={1}></Col>
            <Col span={7}>
              <Card>
                <Alert
                  message={`${selectedValue?.format('YYYY-MM-DD')}`}
                  style={{ marginBottom: 10 }}
                />
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                {dataSource ? (
                  dataSource.map((data) => {
                    if (
                      selectedValue.format('YYYY-MM-DD') === data.releaseDate
                    ) {
                      return (
                        <Collapse defaultActiveKey={['1']} key={data.releaseId}>
                          <Panel
                            header={
                              data.productionName + ' (' + data.releaseId + ')'
                            }
                            key={data.releaseId}
                          >
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [거래처]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.client.clientName}
                              </div>
                            </div>
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [담당자(거래처)]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.client.clientManager}
                              </div>
                            </div>
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [연락처(거래처)]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.client.clientTel}
                              </div>
                            </div>
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [출고수량]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.releaseQuantity}
                              </div>
                            </div>
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [택배사]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.delivery.deliveryCompanyName}
                              </div>
                            </div>
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <div style={{ width: '50%' }}>
                                <Typography.Text
                                  strong
                                  style={{ backgroundColor: '#F7ECDE' }}
                                >
                                  [운송장번호]
                                </Typography.Text>
                              </div>
                              <div style={{ width: '50%', textAlign: 'right' }}>
                                {data.delivery.deliveryTrackingNumber}
                              </div>
                            </div>
                          </Panel>
                        </Collapse>
                      );
                    }
                  })
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </Card>
            </Col>
          </Row>
        </div>
        <div
          style={{ width: '100%', height: 20, backgroundColor: '#F0F2F5' }}
        ></div>
        <Row gutter={24}>
          <Col className="gutter-row" span={13}>
            <Title level={4} style={{ marginBottom: 20, paddingLeft: 10 }}>
              거래처별 매출
            </Title>
            <Column {...config} style={{ height: '85%', paddingLeft: 10 }} />
          </Col>
          <Col
            className="gutter-row"
            span={1}
            style={{ backgroundColor: '#F0F2F5' }}
          ></Col>
          <Col className="gutter-row" span={10}>
            <Title level={4} style={{ marginBottom: 20 }}>
              {month}월 생산량
            </Title>
            <PieChart releaseConfirmedList={releaseConfirmedList} />
          </Col>
        </Row>
      </Spin>
    </>
  );
};

export default AdminDashBoardPresenter;
