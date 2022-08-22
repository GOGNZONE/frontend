import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  orderId: '',
  orderProductionName: '',
  orderProductionBrandName: '',
  orderProductionPrice: 0,
  orderProductionQuantity: 0,
  orderProuctionFile: '',
  orderProductionStandard: '',
  orderProductionUnit: '',
  orderProductionDescription: '',
  orderProductionEndDate: '',
  orderDate: '',
  client: '',
};

export const SET_NEW_ORDER = 'order/SET_NEW_ORDER'; //??

export const setNewOrder = createAction(SET_NEW_ORDER);

const orderReducer = handleActions(
  {
    [SET_NEW_ORDER]: (state = initialState, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft[name] = value;
      }),
  },
  initialState,
);

export default orderReducer;
