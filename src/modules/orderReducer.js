function orderReducer(state, action) {
  if (state === undefined) {
    return {
      orderList: [],
      order: {},
    };
  }
  const newState = { ...state };
  if (action.type === 'GET_ORDER_LIST') {
    newState.orderList = action.payload;
  }
  if (action.type === 'GET_ORDER') {
    newState.order = action.payload;
  }
  return newState;
}

export default orderReducer;
