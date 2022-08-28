import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_CLIENT_LIST = 'GET_CLINET_LIST';
export const GET_CLIENT_LIST_SUCCESS = 'GET_CLIENT_LIST_SUCCESS';
export const GET_CLIENT_LIST_ERROR = 'GET_CLIENT_LIST_ERROR';

export const GET_CLIENT = 'GET_CLIENT';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_CLIENT_ERROR = 'GET_CLIENT_ERROR';

export const SET_CLIENT = 'SET_CLIENT';
export const SET_CLIENT_SUCCESS = 'SET_CLIENT_SUCCESS';
export const SET_CLIENT_ERROR = 'SET_CLIENT_ERROR';

export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_ERROR = 'DELETE_CLIENT_ERROR';

export const getClientList = createPromiseThunk(
  GET_CLIENT_LIST,
  api.getClientList,
);

export const getClientInfo = createPromiseThunk(GET_CLIENT, api.getClientInfo);

export const updateClient = createPromiseThunk(SET_CLIENT, api.updateClient);

export const deleteClient = createPromiseThunk(DELETE_CLIENT, api.deleteClient);
