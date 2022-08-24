import { handleActions } from 'redux-actions';
import * as api from '../Apis/index';
import createRequestThunk from '../Apis/createRequestThunk';

const GET_LIST = '/stock/GET_LIST';
const GET_LIST_SUCCESS = '/stock/GET_LIST_SUCCESS';

export const getList = createRequestThunk(GET_LIST, api.getStockList);

const initialState = {
  list: {},
};

const stock = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState,
);

export default stock;
