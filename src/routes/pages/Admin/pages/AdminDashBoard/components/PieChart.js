import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({ releaseConfirmedList }) => {
  const data = [];

  if (releaseConfirmedList) {
    releaseConfirmedList.map((d) =>
      data.push({ type: d.productionName, value: d.productionQuantity }),
    );
  }

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{value}개',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return <Pie {...config} />;
};

export default PieChart;
