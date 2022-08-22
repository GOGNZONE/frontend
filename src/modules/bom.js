import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  bomId: '',
  bomName: '',
  bomQuantity: 0,
  bomPrice: 0,
  bomStandard: '',
  bomUnit: '',
  bomDescription: '',
  bomReceivedData: '',
  bomFile: '',
  bomRequiredQuntity: '',
  storage: '',
  bomParent: '',
};

export const SET_NEW_BOM = 'bom/SET_NEW_BOM'; //??
export const setNewBOM = createAction(SET_NEW_BOM);

const bomReducer = handleActions(
  {
    [SET_NEW_BOM]: (state = initialState, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft[name] = value;
      }),
  },
  initialState,
);

export default bomReducer;
