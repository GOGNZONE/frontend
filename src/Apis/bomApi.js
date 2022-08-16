import axiosInstance from '../Utils/index.js';

/* BOM 리스트 조회 */
export const getBomList = async () => {
  const response = await axiosInstance.get('/api/BOM/list');
  return response;
};

/* BOM 코드(bom_id)로 상세 조회 */
export const getBom = async (bomIdParams) => {
  const response = await axiosInstance.get(`/api/BOM/${bomIdParams}`);
  return response;
};

/* BOM 등록 */
export const InsertBOM = async (bom) => {
  const response = await axiosInstance.post('/api/BOM', bom);
  return response;
};
