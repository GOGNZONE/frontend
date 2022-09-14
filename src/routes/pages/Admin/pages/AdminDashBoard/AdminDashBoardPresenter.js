import React, { useEffect } from 'react';
import { Typography, Spin, Col, Row, Divider } from 'antd';
import moment from 'moment';
import './adminDashBoard.css';
import PieChart from './components/PieChart';
import ColumnChart from './components/ColumnChart';
import ReleaseCalendar from './components/ReleaseCalendar';

const { Title } = Typography;

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
}) => {
  useEffect(() => {
    setReleaseConfirmedList(
      dataSource?.filter((data) => data.releaseConfirmed === 1),
    );
  }, [dataSource]);

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Title level={3}>DashBoard</Title>
          <Divider />
          <Title level={4} mark>
            {year}년 {month}월 출고일정
          </Title>
          <ReleaseCalendar
            value={value}
            selectedValue={selectedValue}
            setValue={setValue}
            setSelectedValue={setSelectedValue}
            dataSource={dataSource}
            releaseConfirmedList={releaseConfirmedList}
          />
        </div>
        <Divider style={{ marginBottom: 30 }} />
        <Row gutter={24}>
          <Col className="gutter-row" span={13}>
            <Title level={4} style={{ marginBottom: 20, paddingLeft: 10 }} mark>
              거래처별 누적 매출액
            </Title>
            {/* <Column {...config} style={{ height: '85%', paddingLeft: 10 }} /> */}
            <ColumnChart releaseConfirmedList={releaseConfirmedList} />
          </Col>
          <Col className="gutter-row" span={1}></Col>
          <Col className="gutter-row" span={10}>
            <Title level={4} style={{ marginBottom: 20 }} mark>
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
