import axios from 'axios';

/** axios localhost instance 생성 */
const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

/** axios gongzone-service instance */

/** interceptor */
instance.interceptors.response.use(
  (response) => {
    /** http status가 200인 경우
     * 응답 바로 직전에 대해 작성
     * .then() 으로 이어짐
     */
    // if (response.headers && accessToken)
    //   response.headers.Authorization = `Bearer ${accessToken}`;
    return response;
  },
  (error) => {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.
        
        status code : 400 ~ 500
    */
    if (error.response.status === 400) {
      console.log(error);
      window.location.href = '/';
    }
    if (error.response.status === 401) {
      alert('인증이 필요합니다.');
      window.location.href = '/';
    }
    if (error.response.status === 403) {
      alert('접근 권한이 없습니다.');
      window.location.href = '/';
    }
    if (error.response.status === 500) {
      console.log(error);
      window.location.href = '/';
    }
  },
);

export default instance;
