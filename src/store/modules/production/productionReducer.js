import * as types from './productionAction';

const initialState = {
  data: [],
};

const productionReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTION_LIST_REQUEST:
      return {
        ...prevState,
        data: action.data,
      };
    case types.GET_PRODUCTION_REQUEST:
      return { ...action.data };
    case types.ADD_PRODUCTION_REQUEST:
      return {
        ...prevState,
        data: action.data,
      };
    // case types.MODIFY_PRODUCTION_REQUEST:
    //   return {};
    default:
      return prevState;
  }
};

export default productionReducer;
