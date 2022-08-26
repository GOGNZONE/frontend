import * as api from 'Apis/index';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from 'lib/asyncUtils';

const GET_CLIENT_LIST = 'GET_CLIENT_LIST';
const GET_CLIENT_LIST_SUCCESS = 'GET_CLIENT_LIST_SUCCESS';
const GET_CLIENT_LIST_ERROR = 'GET_CLIENT_LIST_ERROR';

export const getClientList = createPromiseThunk(
  GET_CLIENT_LIST,
  api.getClientList,
);

const initalState = {
  clientList: reducerUtils.initial(),
};

export default function client(state = initalState, action) {
  switch (action.type) {
    case GET_CLIENT_LIST:
    case GET_CLIENT_LIST_SUCCESS:
    case GET_CLIENT_LIST_ERROR:
      const clientListReducer = handleAsyncActions(
        GET_CLIENT_LIST,
        'clientList',
      );
      return clientListReducer(state, action);
    default:
      return state;
  }
}
