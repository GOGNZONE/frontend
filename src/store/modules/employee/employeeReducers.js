import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './employeeActions';

const initialState = {
  employeeList: reducerUtils.initial(),
  employee: reducerUtils.initial(),
  mypage: reducerUtils.initial(),
  retiredEmployeeList: reducerUtils.initial(),
  retiredEmployee: reducerUtils.initial(),
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

    case types.MYPAGE:
    case types.MYPAGE_SUCCESS:
    case types.MYPAGE_ERROR:
      const mypageReducer = handleAsyncActions(types.MYPAGE, 'mypage');
      return mypageReducer(state, action);

    case types.GET_RETIRED_EMPLOYEE_LIST:
    case types.GET_RETIRED_EMPLOYEE_LIST_SUCCESS:
    case types.GET_RETIRED_EMPLOYEE_LIST_ERROR:
      const retiredEmployeeListReduer = handleAsyncActions(
        types.GET_RETIRED_EMPLOYEE_LIST,
        'retiredEmployeeList',
        true,
      );
      return retiredEmployeeListReduer(state, action);

    case types.GET_RETIRED_EMPLOYEE:
    case types.GET_RETIRED_EMPLOYEE_SUCCESS:
    case types.GET_RETIRED_EMPLOYEE_ERROR:
      const retiredEmployeeReducer = handleAsyncActions(
        types.GET_RETIRED_EMPLOYEE,
        'retiredEmployee',
      );
      return retiredEmployeeReducer(state, action);

    default:
      return state;
  }
};
