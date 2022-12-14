import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

/** Employee */
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

export const UPDATE_MYPROFILE = 'UPDATE_MYPROFILE';
export const UPDATE_MYPROFILE_SUCCESS = 'UPDATE_MYPROFILE_SUCCESS';
export const UPDATE_MYPROFILE_ERROR = 'UPDATE_MYPROFILE_ERROR';

export const SET_PASSWORD_EMPLOYEE = 'SET_PASSWORD_EMPLOYEE';
export const SET_PASSWORD_EMPLOYEE_SUCCESS = 'SET_PASSWORD_EMPLOYEE_SUCCESS';
export const SET_PASSWORD_EMPLOYEE_ERROR = 'SET_PASSWORD_EMPLOYEE_ERROR';

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_ERROR = 'DELETE_EMPLOYEE_ERROR';

/** Retired Employee */
export const GET_RETIRED_EMPLOYEE_LIST = 'GET_RETIRED_EMPLOYEE_LIST';
export const GET_RETIRED_EMPLOYEE_LIST_SUCCESS =
  'GET_RETIRED_EMPLOYEE_LIST_SUCCESS';
export const GET_RETIRED_EMPLOYEE_LIST_ERROR =
  'GET_RETIRED_EMPLOYEE_LIST_ERROR';

export const GET_RETIRED_EMPLOYEE = 'GET_RETIRED_EMPLOYEE';
export const GET_RETIRED_EMPLOYEE_SUCCESS = 'GET_RETIRED_EMPLOYEE_SUCCESS';
export const GET_RETIRED_EMPLOYEE_ERROR = 'GET_RETIRED_EMPLOYEE_ERROR';

export const DELETE_RETIRED_EMPLOYEE = 'DELETE_RETIRED_EMPLOYEE';
export const DELETE_RETIRED_EMPLOYEE_SUCCESS =
  'DELETE_RETIRED_EMPLOYEE_SUCCESS';
export const DELETE_RETIRED_EMPLOYEE_ERROR = 'DELETE_RETIRED_EMPLOYEE_ERROR';

/** Employee */
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
  UPDATE_MYPROFILE,
  api.updateMyProfile,
);

export const updatePassword = createPromiseThunk(
  SET_PASSWORD_EMPLOYEE,
  api.updatePassword,
);

export const deleteEmployee = createPromiseThunk(
  DELETE_EMPLOYEE,
  api.deleteEmployee,
);

/** Retired Employee */
export const getRetiredEmployeeList = createPromiseThunk(
  GET_RETIRED_EMPLOYEE_LIST,
  api.getRetiredEmployeeList,
);

export const getRetiredEmployee = createPromiseThunk(
  GET_RETIRED_EMPLOYEE,
  api.getRetiredEmployeeInfo,
);

export const deleteRetiredEmployee = createPromiseThunk(
  DELETE_RETIRED_EMPLOYEE,
  api.deleteRetiredEmployee,
);
