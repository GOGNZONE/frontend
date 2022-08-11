import axiosInstance from '../utils/index.js';

/* 창고 리스트 조회 */
export const getOrderList = async () => {
  const response = await axiosInstance.get('/api/order/list');
  return response;
};

/* 창고 코드(production_id)로 상세 조회 */
export const getOrder = async (orderIdParams) => {
  const response = await axiosInstance.get(`/api/order/${orderIdParams}`);
  return response;
};
