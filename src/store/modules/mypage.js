import * as api from '../apis';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from 'lib/asyncUtils';

const GET_MYPAGE = 'GET_MYPAGE';
const GET_MYPAGE_SUCCESS = 'GET_MYPAGE_SUCCESS';
const GET_MYPAGE_ERROR = 'GET_MYPAGE_ERROR';

export const getMypage = createPromiseThunk(GET_MYPAGE, api.myEmployeeInfo);

const initialState = {
  mypage: reducerUtils.initial(),
};

export default function mypage(state = initialState, action) {
  switch (action.type) {
    case GET_MYPAGE:
    case GET_MYPAGE_SUCCESS:
    case GET_MYPAGE_ERROR:
      const mypageReducer = handleAsyncActions(GET_MYPAGE, 'mypage');
      return mypageReducer(state, action);
    default:
      return state;
  }
}
