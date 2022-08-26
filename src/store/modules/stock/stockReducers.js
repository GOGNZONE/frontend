import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './stockActions';
const initialState = {
  stockList: reducerUtils.initial(),
  stock: reducerUtils.initial(),
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STOCK_LIST:
    case types.GET_STOCK_LIST_SUCCESS:
    case types.GET_STOCK_LIST_ERROR:
      const stockListReducer = handleAsyncActions(
        types.GET_STOCK_LIST,
        'stockList',
        true,
      );
      return stockListReducer(state, action);

    case types.GET_STOCK:
    case types.GET_STOCK_SUCCESS:
    case types.GET_STOCK_ERROR:
      const stockReducer = handleAsyncActions(types.GET_STOCK, 'stock');
      return stockReducer(state, action);
    default:
      return state;
  }
};
