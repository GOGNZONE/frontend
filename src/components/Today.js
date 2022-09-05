import React from 'react';
import { Tag } from 'antd';

const Today = ({ releaseDate }) => {
  const today = new Date();
  const date = releaseDate;
  const dateArr = date.split('-');
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const startDate = new Date(todayYear, todayMonth, todayDate);
  const endDate = new Date(dateArr[0], dateArr[1], dateArr[2]);

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
