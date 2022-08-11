import axiosInstance from '../utils/index.js';

/* 창고 리스트 조회 */
export const getStockList = async () => {
  const response = await axiosInstance.get('/api/stock/list');
  return response;
};

/* 창고 코드(production_id)로 상세 조회 */
export const getStock = async (stockIdParams) => {
  const response = await axiosInstance.get(`/api/stock/${stockIdParams}`);
  return response;
};
