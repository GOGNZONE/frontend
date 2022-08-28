import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_STOR_LIST = 'GET_STOR_LIST';
export const GET_STOR_LIST_SUCCESS = 'GET_STOR_LIST_SUCCESS';
export const GET_STOR_LIST_ERROR = 'GET_STOR_LIST_ERROR';

export const GET_STORAGE = 'GET_STORAGE';
export const GET_STORAGE_SUCCESS = 'GET_STORAGE_SUCCESS';
export const GET_STORAGE_ERROR = 'GET_STORAGE_ERROR';

export const POST_STORAGE = 'POST_STORAGEE';
export const POST_STORAGE_SUCCESS = 'POST_STORAGEE_SUCCESS';
export const POST_STORAGE_ERROR = 'POST_STORAGE_ERROR';

export const PUT_STORAGE = 'PUT_STORAGE';
export const PUT_STORAGE_SUCCESS = 'PUT_STORAGEE_SUCCESS';
export const PUT_STORAGE_ERROR = 'PUT_STORAGE_ERROR';

export const DELETE_STORAGE = 'DELETE_STORAGE';
export const DELETE_STORAGE_SUCCESS = 'DELETE_STORAGE_SUCCESS';
export const DELETE_STORAGE_ERROR = 'DELETE_STORAGE_ERROR';

export const getStorageList = createPromiseThunk(
  GET_STOR_LIST,
  api.getStorageList,
);

export const getStorage = createPromiseThunk(GET_STORAGE, api.getStorageInfo);

export const registerStorage = createPromiseThunk(
  POST_STORAGE,
  api.registerStorage,
);

export const putStorage = createPromiseThunk(PUT_STORAGE, api.updateStorage);

export const deleteStorage = createPromiseThunk(
  DELETE_STORAGE,
  api.deleteStorage,
);
