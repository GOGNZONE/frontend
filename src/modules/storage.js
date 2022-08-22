import { handleActions } from 'redux-actions';
import * as api from '../Apis/index';
import createRequestThunk from '../Apis/createRequestThunk';

// 액션 타입을 선언
const GET_LIST = '/storage/GET_LIST';
const GET_LIST_SUCCESS = '/storage/GET_LIST_SUCCESS';

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공 했을 때, 실패했을 때 다른 액션을 디스패치

// 리팩토링 createRequestThunk
export const getList = createRequestThunk(GET_LIST, api.getStorageList);

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리합니다.
const initialState = {
  list: null,
};

const storage = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState,
);

export default storage;
