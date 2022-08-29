import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './clientActions';

const initialState = {
  clientList: reducerUtils.initial(),
  client: reducerUtils.initial(),
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CLIENT_LIST:
    case types.GET_CLIENT_LIST_SUCCESS:
    case types.GET_CLIENT_LIST_ERROR:
      const clientListReducer = handleAsyncActions(
        types.GET_CLIENT_LIST,
        'clientList',
        true,
      );
      return clientListReducer(state, action);
    case types.GET_CLIENT:
    case types.GET_CLIENT_SUCCESS:
    case types.GET_CLIENT_ERROR:
      const clientReducer = handleAsyncActions(types.GET_CLIENT, 'client');
      return clientReducer(state, action);
    default:
      return state;
  }
};
