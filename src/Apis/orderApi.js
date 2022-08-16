import axiosInstance from '../Utils/index.js';

/* 발주 리스트 조회 */
export const getOrderList = async () => {
  const response = await axiosInstance.get('/api/order/list');
  return response;
};

/* 발주 코드(order_id)로 상세 조회 */
export const getOrder = async (orderIdParams) => {
  const response = await axiosInstance.get(`/api/order/${orderIdParams}`);
  return response;
};

/* 발주 등록 */
export const InsertStorage = async (order) => {
  const response = await axiosInstance.post('/api/order', order);
  return response;
};
