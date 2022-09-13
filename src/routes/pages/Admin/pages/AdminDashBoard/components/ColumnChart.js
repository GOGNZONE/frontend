import React from 'react';
import { Column } from '@ant-design/plots';

const ColumnChart = ({ releaseConfirmedList }) => {
  let tempArray = [];

  if (releaseConfirmedList) {
    releaseConfirmedList.map((d) =>
      tempArray.push({ type: d.client.clientName, sales: d.releaseTotalPrice }),
    );
  }

  let flag = false;
  let cnt = 0;
  let data = [];

  for (let i = 0; i < tempArray.length; i++) {
    cnt = 0;
    flag = false;
    for (let j = 0; j < data.length; j++) {
      if (data[j].type === tempArray[i].type) {
        flag = true;
      }
      if (flag) {
        ++cnt;
        data[j].sales += tempArray[i].sales;
      }
    }
    if (cnt === 0) {
      data.push(tempArray[i]);
    }
  }

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    seriesField: 'type',
    label: {
      position: 'middle',
      style: {
        opacity: 0.8,
        fontSize: 15,
      },
      content: (originData) => {
        return originData.sales + '원';
      },
    },
    colorField: 'type', // or seriesField in some cases
    color: ['#6395F9', '#62DAAB', '#657797', '#F6C022', '#7666F9', '#74CBED'],
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
  return <Column {...config} style={{ height: '85%', paddingLeft: 10 }} />;
};

export default ColumnChart;
