import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './orderActions';
const initialState = {
  orderList: reducerUtils.initial(),
  order: reducerUtils.initial(),
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDER_LIST:
    case types.GET_ORDER_LIST_SUCCESS:
    case types.GET_ORDER_LIST_ERROR:
      const orderListReducer = handleAsyncActions(
        types.GET_ORDER_LIST,
        'orderList',
        true,
      );
      return orderListReducer(state, action);

    case types.GET_ORDER:
    case types.GET_ORDER_SUCCESS:
    case types.GET_ORDER_ERROR:
      const orderReducer = handleAsyncActions(types.GET_ORDER, 'order');
      return orderReducer(state, action);
    default:
      return state;
  }
};
