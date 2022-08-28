import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';
export const GET_EMPLOYEE_LIST_SUCCESS = 'GET_EMPLOYEE_LIST_SUCCESS';
export const GET_EMPLOYEE_LIST_ERROR = 'GET_EMPLOYEE_LIST_ERROR';

export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_ERROR = 'GET_EMPLOYEE_ERROR';

export const MYPAGE = 'MYPAGE';
export const MYPAGE_SUCCESS = 'MYPAGE_SUCCESS';
export const MYPAGE_ERROR = 'MYPAGE_ERROR';

export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const REGISTER_EMPLOYEE_SUCCESS = 'REGISTER_EMPLOYEE_SUCCESS';
export const REGISTER_EMPLOYEE_ERROR = 'REGISTER_EMPLOYEE_ERROR';

export const SET_PASSWORD_EMPLOYEE = 'SET_PASSWORD_EMPLOYEE';
export const SET_PASSWORD_EMPLOYEE_SUCCESS = 'SET_PASSWORD_EMPLOYEE_SUCCESS';
export const SET_PASSWORD_EMPLOYEE_ERROR = 'SET_PASSWORD_EMPLOYEE_ERROR';

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_ERROR = 'DELETE_EMPLOYEE_ERROR';

export const getEmployeeList = createPromiseThunk(
  GET_EMPLOYEE_LIST,
  api.getEmployeeList,
);

export const getEmployee = createPromiseThunk(
  GET_EMPLOYEE,
  api.getEmployeeInfo,
);

export const getMypage = createPromiseThunk(MYPAGE, api.myEmployeeInfo);

export const registerEmployee = createPromiseThunk(
  REGISTER_EMPLOYEE,
  api.registerEmployee,
);

export const updateProfile = createPromiseThunk(
  SET_PASSWORD_EMPLOYEE,
  api.updateMyProfile,
);

export const deleteEmployee = createPromiseThunk(
  DELETE_EMPLOYEE,
  api.deleteEmployee,
);
