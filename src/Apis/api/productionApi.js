import axiosInstance from '../utils/index.js';

/* 전체 생산 품목 조회 */
export const getProductionList = async () => {
  const response = await axiosInstance.get('/api/production/list');
  return response;
};
