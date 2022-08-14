import axiosInstance from '../utils/index.js';

/* 전체 출고 목록 조회 */
export const getReleaseList = async () => {
  const response = await axiosInstance.get('/api/release/list');
  return response;
};

/* 출고 상세 조회 */
export const getRelease = async (releaseIdParams) => {
  const response = await axiosInstance.get(`/api/release/${releaseIdParams}`);
  return response;
};
