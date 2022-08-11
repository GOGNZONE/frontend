import axiosInstance from '../utils/index.js';

/* 창고 리스트 조회 */
export const getBomList = async () => {
  const response = await axiosInstance.get('/api/BOM/list');
  return response;
};

/* 창고 코드(production_id)로 상세 조회 */
export const getBom = async (bomIdParams) => {
  const response = await axiosInstance.get(`/api/BOM/${bomIdParams}`);
  return response;
};
