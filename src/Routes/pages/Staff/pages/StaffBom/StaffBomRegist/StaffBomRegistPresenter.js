import React from 'react';
const StaffBomRegistPresenter = () => {
  return (
    <div>
      원자재명<input type="text"></input>
      <br />
      원자재가격<input type="text"></input>
      <br />
      원자재규격<input type="text"></input>
      <br />
      원자재규격단위<input type="text"></input>
      <br />
      비고<input type="text"></input>
      <br />
      원자재관련파일<input type="text"></input>
      <br />
      원자재소모량<input type="text"></input>
      <br />
      창고<input type="text"></input>
      <br />
      원자재부모id<input type="text"></input>
      <button>추가</button> <button>취소</button>
    </div>
  );
};

export default StaffBomRegistPresenter;
