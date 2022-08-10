import React from 'react';
import axios from 'axios';
function StaffStorageRegistPresenter() {
  const insertStorage = () => {
    const category = document.getElementById('storageCategory').value;
    const address = document.getElementById('storageAddress').value;
    const description = document.getElementById('storageDescription').value;

    const data = {
      storageCategory: category,
      storageAddress: address,
      storageDescription: description,
    };
    console.log(data);

    axios.post('http://localhost:8080/api/storage', JSON.stringify(data), {
      headers: { 'Content-Type': `application/json` },
    });
  };
  return (
    <div>
      창고 종류<input id="storageCategory" type="text"></input>
      <br />
      창고 주소<input id="storageAddress" type="text"></input>
      <br />
      비고<input id="storageDescription" type="text"></input>
      <br />
      <button onClick={insertStorage}>추가</button> <button>취소</button>
    </div>
  );
}

export default StaffStorageRegistPresenter;
