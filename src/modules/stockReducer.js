function stockReducer(state, action) {
  if (state === undefined) {
    return {
      stockList: [],
      stock: {
        stockName: '',
        stockQuantity: '',
        stockDescription: '',
      },
    };
  }
  const newState = { ...state };
  if (action.type === 'GET_STOCK_LIST') {
    newState.stockList = action.payload;
  }
  if (action.type === 'GET_STOCK') {
    newState.stock = action.payload;
  }
  if (action.type === 'POST_STOCK') {
    newState.stock = action.payload;
  }
  return newState;
}

export default stockReducer;
