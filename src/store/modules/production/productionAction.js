export const GET_PRODUCTION_LIST_REQUEST = 'GET_PRODUCTION_LIST_REQUEST';
export const GET_PRODUCTION_REQUEST = 'GET_PRODUCTION_REQUEST';
export const ADD_PRODUCTION_REQUEST = 'ADD_PRODUCTION_REQUEST';
// export const MODIFY_PRODUCTION_REQUEST = 'MODIFY_PRODUCTION_REQUEST';

export const getProductions = (data) => {
  return {
    type: GET_PRODUCTION_LIST_REQUEST,
    data,
  };
};

export const getProduction = (data) => {
  return {
    type: GET_PRODUCTION_REQUEST,
    data,
  };
};

export const addProduction = (data) => {
  return {
    type: ADD_PRODUCTION_REQUEST,
    data,
  };
};
