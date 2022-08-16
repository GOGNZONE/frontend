import axiosInstance from '../Utils/index.js';

/* 재고 리스트 조회 */
export const getStockList = async () => {
  const response = await axiosInstance.get('/api/stock/list');
  return response;
};

/* 재고 코드(stock_Id)로 상세 조회 */
export const getStock = async (stockIdParams) => {
  const response = await axiosInstance.get(`/api/stock/${stockIdParams}`);
  return response;
};

/* 재고 등록 */
export const InsertStock = async (stock) => {
  const response = await axiosInstance.post('/api/stock', stock);
  return response;
};
