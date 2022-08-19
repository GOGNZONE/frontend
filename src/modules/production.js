import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  productionName: '',
  productionBrandName: '',
  productionPrice: 0,
  productionQuantity: 0,
  productionStandard: '',
  productionUnit: '',
  productionDescription: '',
  productionReleaseDate: '',
  productionDate: '',
};

export const SET_NEW_PRODUCTION = 'production/SET_NEW_PRODUCTION';

export const setNewProduction = createAction(SET_NEW_PRODUCTION);

const productionReducer = handleActions(
  {
    [SET_NEW_PRODUCTION]: (
      state = initialState,
      { payload: { name, value } },
    ) =>
      produce(state, (draft) => {
        draft[name] = value;
      }),
  },
  initialState,
);

export default productionReducer;
