import { handleActions } from 'redux-actions';
import * as api from '../Apis/index';
import createRequestThunk from '../Apis/createRequestThunk';

const GET_LIST = '/order/GET_LIST';
const GET_LIST_SUCCESS = '/order/GET_LIST_SUCCESS';

export const getList = createRequestThunk(GET_LIST, api.getOrderList);

const initialState = {
  list: {},
};

const order = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState,
);

export default order;
