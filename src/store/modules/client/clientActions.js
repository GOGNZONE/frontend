import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_CLIENT_LIST = 'GET_CLIENT_LIST';
export const GET_CLIENT_LIST_SUCCESS = 'GET_CLIENT_LIST_SUCCESS';
export const GET_CLIENT_LIST_ERROR = 'GET_CLIENT_LIST_ERROR';

export const GET_CLIENT = 'GET_CLIENT';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_CLIENT_ERROR = 'GET_CLIENT_ERROR';

export const POST_CLIENT = 'POST_CLIENT';
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';
export const POST_CLIENT_ERROR = 'POST_CLIENT_ERROR';

export const PUT_CLIENT = 'PUT_CLIENT';
export const PUT_CLIENT_SUCCESS = 'PUT_CLIENT_SUCCESS';
export const PUT_CLIENT_ERROR = 'PUT_CLIENT_ERROR';

export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_ERROR = 'DELETE_CLIENT_ERROR';

export const getClientList = createPromiseThunk(
  GET_CLIENT_LIST,
  api.getClientList,
);

export const getClient = createPromiseThunk(GET_CLIENT, api.getClientInfo);

export const registerClient = createPromiseThunk(
  POST_CLIENT,
  api.registerClient,
);

export const updateClient = createPromiseThunk(PUT_CLIENT, api.updateClient);

export const deleteClient = createPromiseThunk(DELETE_CLIENT, api.deleteClient);
