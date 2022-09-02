import React from 'react';
import { Tag } from 'antd';

const Today = ({ releaseDate }) => {
  const today = new Date();
  const date = releaseDate;
  const dateArr = date.split('-');
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDay() - 3;

  const startDate = new Date(todayYear, todayMonth, todayDay);
  const endDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);

  const betweenMs = endDate.getTime() - startDate.getTime();
  const betweenDay = betweenMs / (1000 * 60 * 60 * 24);

  return (
    <div>
      {betweenDay <= 7 ? (
        <Tag color="red">D-{betweenDay}</Tag>
      ) : betweenDay <= 15 ? (
        <Tag color="green">D-{betweenDay}</Tag>
      ) : (
        <Tag color="blue">D-{betweenDay}</Tag>
      )}
    </div>
  );
};

export default Today;
