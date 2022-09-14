import React from 'react';
import {
  Calendar,
  Alert,
  Card,
  Empty,
  Collapse,
  Row,
  Col,
  Tag,
  Typography,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const ReleaseCalendar = ({
  value,
  selectedValue,
  setValue,
  setSelectedValue,
  dataSource,
  releaseConfirmedList,
}) => {
  let dateList;
  let subStrList;

  if (dataSource) {
    dateList = releaseConfirmedList?.map((data) => data.releaseDate);
    subStrList = releaseConfirmedList?.map((data) =>
      parseInt(data.releaseDate.substr(8, 2)),
    );
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

  let tempData = [];
  for (let index = 0; index < 42; index++) {
    tempData.push(false);
  }
  for (let index = 0; index < subStrList?.length; index++) {
    tempData[subStrList[index]] = true;
  }

  return (
    <Row>
      <Col span={16}>
        <Calendar
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
          {tempData
            ? tempData.map((data, index) => {
                if (parseInt(selectedValue.format('DD')) === index && !data)
                  return (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} key={index} />
                  );
              })
            : ''}
          {dataSource ? (
            dataSource.map((data) => {
              if (selectedValue.format('YYYY-MM-DD') === data.releaseDate) {
                return (
                  <Collapse defaultActiveKey={['1']} key={data.releaseId}>
                    <Panel
                      header={data.productionName + ' (' + data.releaseId + ')'}
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
  );
};

export default ReleaseCalendar;
