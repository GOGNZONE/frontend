import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './bomActions';
const initialState = {
  bomList: reducerUtils.initial(),
  bom: reducerUtils.initial(),
};

export const bomReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOM_LIST:
    case types.GET_BOM_LIST_SUCCESS:
    case types.GET_BOM_LIST_ERROR:
      const bomListReducer = handleAsyncActions(
        types.GET_BOM_LIST,
        'bomList',
        true,
      );
      return bomListReducer(state, action);

    case types.GET_BOM:
    case types.GET_BOM_SUCCESS:
    case types.GET_BOM_ERROR:
      const bomReducer = handleAsyncActions(types.GET_BOM, 'bom');
      return bomReducer(state, action);
    default:
      return state;
  }
};
