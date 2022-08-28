import React from 'react';

const AdminUpdateEmployee = ({ setPage, onChangeHandler }) => {
  console.log(onChangeHandler);
  return (
    <div>
      <button onClick={() => setPage(true)}>상세 페이지로</button>
    </div>
  );
};

export default AdminUpdateEmployee;
