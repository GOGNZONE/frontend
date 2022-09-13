import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './productionActions';

const initialState = {
  productions: reducerUtils.initial(),
  production: reducerUtils.initial(),
};

export const productionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTIONS:
    case types.GET_PRODUCTIONS_SUCCESS:
    case types.GET_PRODUCTIONS_ERROR:
      return handleAsyncActions(types.GET_PRODUCTIONS, 'productions')(
        state,
        action,
      );
    case types.GET_PRODUCTION:
    case types.GET_PRODUCTION_SUCCESS:
    case types.GET_PRODUCTION_ERROR:
      return handleAsyncActions(types.GET_PRODUCTION, 'production')(
        state,
        action,
      );
    case types.POST_PRODUCTION:
    case types.POST_PRODUCTION_SUCCESS:
    case types.POST_PRODUCTION_ERROR:
      return handleAsyncActions(types.POST_PRODUCTION, 'productions')(
        state,
        action,
      );
    case types.PUT_PRODUCTION:
      return {
        productions: { loading: false, data: null },
        production: { loading: false, data: action.param.inData },
      };
    case types.DELETE_PRODUCTION:
      return {
        productions: {
          loading: false,
          data: state.productions.data
            ? state.productions.data.filter(
                (production) => production.productionId !== action.param,
              )
            : null,
        },
        production: {
          loading: false,
          data: null,
        },
      };
    case types.CLEAR_PRODUCTION:
      return {
        ...state,
        production: reducerUtils.initial(),
      };
    default:
      return state;
  }
};
