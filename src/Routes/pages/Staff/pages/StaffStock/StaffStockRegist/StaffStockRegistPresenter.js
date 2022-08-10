import React from 'react';
import axios from 'axios';
function StaffStockRegistPresenter() {
  const insertStock = () => {
    const name = document.getElementById('stockName').value;
    const quantity = document.getElementById('stockQuantity').value;
    const description = document.getElementById('stockDescription').value;
    const storage = document.getElementById('storage').value;
    const data = {
      stockName: name,
      stockQuantity: quantity,
      stockDescription: description,
      storage: {
        storageId: storage,
      },
    };

    axios.post('http://localhost:8080/api/stock', JSON.stringify(data), {
      headers: { 'Content-Type': `application/json` },
    });
  };

  return (
    <div>
      <h2>재고 등록</h2>
      재고명<input id="stockName" type="text"></input>
      <br />
      재고 갯수<input id="stockQuantity" type="text"></input>
      <br />
      비고<input id="stockDescription" type="text"></input>
      <br />
      창고<input id="storage" type="number"></input>
      <br />
      <button onClick={insertStock}>등록</button>
      <button>취소</button>
    </div>
  );
}

export default StaffStockRegistPresenter;
