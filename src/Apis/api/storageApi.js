import axiosInstance from '../utils/index.js';

/* 창고 리스트 조회 */
export const getStorageList = async () => {
  const response = await axiosInstance.get('/api/storage/list');
  return response;
};

/* 창고 코드(production_id)로 상세 조회 */
export const getStorage = async (storageIdParams) => {
  const response = await axiosInstance.get(`/api/storage/${storageIdParams}`);
  return response;
};

/* 창고 등록 */
// export const InsertStorage = async () => {
//     const response = await axiosInstance.post('/api/storage',);
//     return response;
//   };
