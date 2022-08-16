import axios from 'axios';

/**
 * axios 인스턴스 생성
 * 생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)은 다음 URL에서 확인 가능
 * https://github.com/axios/axios 의 Request Config 챕터 확인
 */
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'} → 커스텀 헤더
});

/**
 * 1. 요청 인터셉터
 *   : 2개의 콜백 함수를 받음
 *
 * 1) 요청 바로 직전 - @param { axios config }
 * 2) 요청 에러 - @param { error }
 */
instance.interceptors.request.use(
  (config) => {
    // 요청 성공 직전 호출
    // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
    return config;
  },
  (error) => {
    // 요청 에러 직전에 호출
    return Promise.reject(error);
  },
);

/**
 * 2. 응답 인터셉터
 *   : 2개의 콜백 함수를 받음
 *
 * 1) 응답 작성 - @param { http response }
 * 2) 응답 에러 - @param { http error }
 */
instance.interceptors.response.use(
  (response) => {
    /**
     * http status가 200인 경우
     * 응답 성공 직전 호출
     * .then() 으로 이어집니다.
     */
    return response;
  },
  (error) => {
    /**
     * http status가 200이 아닌 경우
     * 응답 에러 직전 호출됩니다.
     * .catch() 으로 이어집니다.
     */
    return Promise.reject(error);
  },
);

// 생성한 인스턴스를 export
export default instance;
