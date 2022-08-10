import axiosInstance from '../utils/index.js';

/* 전체 생산 품목 조회 */
export const getProductionList = async () => {
  const response = await axiosInstance.get('/api/production/list');
  return response;
};

/* 생산 품목 코드(production_id)로 품목 상세 조회 */
export const getProduction = async (productionIdParams) => {
  const response = await axiosInstance.get(
    `/api/production/${productionIdParams}`,
  );
  return response;
};
