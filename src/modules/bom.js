import { handleActions } from 'redux-actions';
import * as api from '../Apis/index';
import createRequestThunk from '../Apis/createRequestThunk';

const GET_LIST = '/bom/GET_LIST';
const GET_LIST_SUCCESS = '/bom/GET_LIST_SUCCESS';

export const getList = createRequestThunk(GET_LIST, api.getBomList);

const initialState = {
  list: {},
};

const bom = handleActions(
  {
    [GET_LIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState,
);

export default bom;
