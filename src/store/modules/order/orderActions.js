import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_ORDER_LIST = 'GET_ORDER_LIST';
export const GET_ORDER_LIST_SUCCESS = 'GET_ORDER_LIST_SUCCESS';
export const GET_ORDER_LIST_ERROR = 'GET_ORDER_LIST_ERROR';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const POST_ORDER = 'POST_ORDER';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';

export const PUT_ORDER = 'PUT_ORDER';
export const PUT_ORDER_SUCCESS = 'PUT_ORDER_SUCCESS';
export const PUT_ORDER_ERROR = 'PUT_ORDER_ERROR';

export const DELETE_ORDER = 'DELETE_ORDER';
export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';
export const DELETE_ORDER_ERROR = 'DELETE_ORDER_ERROR';

export const getOrderList = createPromiseThunk(
  GET_ORDER_LIST,
  api.getOrderList,
);

export const getOrder = createPromiseThunk(GET_ORDER, api.getOrderInfo);

export const registerOrder = createPromiseThunk(POST_ORDER, api.registerOrder);

export const putOrder = createPromiseThunk(PUT_ORDER, api.updateOrder);

export const deleteOrder = createPromiseThunk(DELETE_ORDER, api.deleteOrder);
