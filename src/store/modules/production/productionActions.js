import * as api from 'Apis/index';
import {
  createPromiseThunk,
  createPromiseThunkById,
  createPromiseThunkPut,
} from 'lib/asyncUtils';

export const GET_PRODUCTIONS = 'GET_PRODUCTIONS';
export const GET_PRODUCTIONS_SUCCESS = 'GET_PRODUCTIONS_SUCCESS';
export const GET_PRODUCTIONS_ERROR = 'GET_PRODUCTIONS_ERROR';

export const GET_PRODUCTION = 'GET_PRODUCTION';
export const GET_PRODUCTION_SUCCESS = 'GET_PRODUCTION_SUCCESS';
export const GET_PRODUCTION_ERROR = 'GET_PRODUCTION_ERROR';

export const POST_PRODUCTION = 'POST_PRODUCTION';
export const POST_PRODUCTION_SUCCESS = 'POST_PRODUCTION_SUCCESS';
export const POST_PRODUCTION_ERROR = 'POST_PRODUCTION_ERROR';

export const PUT_PRODUCTION = 'PUT_PRODUCTION';
export const PUT_PRODUCTION_SUCCESS = 'PUT_PRODUCTION_SUCCESS';
export const PUT_PRODUCTION_ERROR = 'PUT_PRODUCTION_ERROR';

export const getProductions = createPromiseThunk(
  GET_PRODUCTIONS,
  api.getProductionList,
);

export const getProduction = createPromiseThunkById(
  GET_PRODUCTION,
  api.getProductionInfo,
);

export const postProduction = createPromiseThunk(
  POST_PRODUCTION,
  api.registerProduction,
);

export const putProduction = createPromiseThunkPut(
  PUT_PRODUCTION,
  api.updateProduction,
);