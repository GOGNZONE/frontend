import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  stockId: '',
  stockName: '',
  stockQuantity: 0,
  stockDescription: '',
  storage: '',
};

export const SET_NEW_STOCK = 'stock/SET_NEW_STOCK'; //??
export const setNewStock = createAction(SET_NEW_STOCK);

const stockReducer = handleActions(
  {
    [SET_NEW_STOCK]: (state = initialState, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft[name] = value;
      }),
  },
  initialState,
);

export default stockReducer;
