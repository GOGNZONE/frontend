import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './employeeActions';

const initialState = {
  employeeList: reducerUtils.initial(),
  employee: reducerUtils.initial(),
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EMPLOYEE_LIST:
    case types.GET_EMPLOYEE_LIST_SUCCESS:
    case types.GET_EMPLOYEE_LIST_ERROR:
      const employeeListReducer = handleAsyncActions(
        types.GET_EMPLOYEE_LIST,
        'employeeList',
        true,
      );
      return employeeListReducer(state, action);
    case types.GET_EMPLOYEE:
    case types.GET_EMPLOYEE_SUCCESS:
    case types.GET_EMPLOYEE_ERROR:
      const employeeReducer = handleAsyncActions(
        types.GET_EMPLOYEE,
        'employee',
      );
      return employeeReducer(state, action);
    default:
      return state;
  }
};
