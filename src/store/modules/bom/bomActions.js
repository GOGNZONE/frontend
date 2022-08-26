import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_BOM_LIST = 'GET_BOM_LIST';
export const GET_BOM_LIST_SUCCESS = 'GET_BOM_LIST_SUCCESS';
export const GET_BOM_LIST_ERROR = 'GET_BOM_LIST_ERROR';

export const GET_BOM = 'GET_BOM';
export const GET_BOM_SUCCESS = 'GET_BOM_SUCCESS';
export const GET_BOM_ERROR = 'GET_BOM_ERROR';

export const POST_BOM = 'POST_BOM';
export const POST_BOM_SUCCESS = 'POST_BOM_SUCCESS';
export const POST_BOM_ERROR = 'POST_BOM_ERROR';

export const PUT_BOM = 'PUT_BOM';
export const PUT_BOM_SUCCESS = 'PUT_BOM_SUCCESS';
export const PUT_BOM_ERROR = 'PUT_BOM_ERROR';

export const DELETE_BOM = 'DELETE_BOM';
export const DELETE_BOM_SUCCESS = 'DELETE_BOM_SUCCESS';
export const DELETE_BOM_ERROR = 'DELETE_BOM_ERROR';

export const getBomList = createPromiseThunk(GET_BOM_LIST, api.getBomList);

export const getBom = createPromiseThunk(GET_BOM, api.getBomInfo);

export const registerBom = createPromiseThunk(POST_BOM, api.registerBom);

export const putBom = createPromiseThunk(PUT_BOM, api.updateBom);

export const deleteBom = createPromiseThunk(DELETE_BOM, api.deleteBom);
