import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './storageActions';
const initialState = {
  storageList: reducerUtils.initial(),
  storage: reducerUtils.initial(),
};

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STOR_LIST:
    case types.GET_STOR_LIST_SUCCESS:
    case types.GET_STOR_LIST_ERROR:
      const storageListReducer = handleAsyncActions(
        types.GET_STOR_LIST,
        'storageList',
        true,
      );
      return storageListReducer(state, action);

    case types.GET_STORAGE:
    case types.GET_STORAGE_SUCCESS:
    case types.GET_STORAGE_ERROR:
      const storageReducer = handleAsyncActions(types.GET_STORAGE, 'storage');
      return storageReducer(state, action);
    default:
      return state;
  }
};
