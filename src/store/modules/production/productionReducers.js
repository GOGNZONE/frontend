import {
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from 'lib/asyncUtils';
import * as types from './productionActions';

const initialState = {
  productions: reducerUtils.initial(),
  production: {},
};

export const productionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTIONS:
    case types.GET_PRODUCTIONS_SUCCESS:
    case types.GET_PRODUCTIONS_ERROR:
      return handleAsyncActions(
        types.GET_PRODUCTIONS,
        'productions',
        true,
      )(state, action);
    case types.GET_PRODUCTION:
    case types.GET_PRODUCTION_SUCCESS:
    case types.GET_PRODUCTION_ERROR:
      return handleAsyncActionsById(
        types.GET_PRODUCTION,
        'production',
        true,
      )(state, action);
    default:
      return state;
  }
};
