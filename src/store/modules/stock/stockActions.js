import * as api from 'Apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_STOCK_LIST = 'GET_STOCK_LIST';
export const GET_STOCK_LIST_SUCCESS = 'GET_STOCK_LIST_SUCCESS';
export const GET_STOCK_LIST_ERROR = 'GET_STOCK_LIST_ERROR';

export const GET_STOCK = 'GET_STOCK';
export const GET_STOCK_SUCCESS = 'GET_STOCK_SUCCESS';
export const GET_STOCK_ERROR = 'GET_STOCK_ERROR';

export const POST_STOCK = 'POST_STOCK';
export const POST_STOCK_SUCCESS = 'POST_STOCK_SUCCESS';
export const POST_STOCK_ERROR = 'POST_STOCK_ERROR';

export const PUT_STOCK = 'PUT_STOCK';
export const PUT_STOCK_SUCCESS = 'PUT_STOCK_SUCCESS';
export const PUT_STOCK_ERROR = 'PUT_STOCK_ERROR';

export const DELETE_STOCK = 'DELETE_STOCK';
export const DELETE_STOCK_SUCCESS = 'DELETE_STOCK_SUCCESS';
export const DELETE_STOCK_ERROR = 'DELETE_STOCK_ERROR';

export const getStockList = createPromiseThunk(
  GET_STOCK_LIST,
  api.getStockList,
);

export const getStock = createPromiseThunk(GET_STOCK, api.getStockInfo);
export const registerStock = createPromiseThunk(POST_STOCK, api.registerStock);
export const putStock = createPromiseThunk(PUT_STOCK, api.updateStock);
export const deleteStock = createPromiseThunk(DELETE_STOCK, api.deleteStock);
