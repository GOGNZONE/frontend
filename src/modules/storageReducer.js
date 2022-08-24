function storageReducer(state, action) {
  if (state === undefined) {
    return {
      storageList: [],
      storage: {
        storageAddress: '',
        storageCategory: '',
        storageDescription: '',
      },
    };
  }
  const newState = { ...state };
  if (action.type === 'GET_STOR_LIST') {
    newState.storageList = action.payload;
  }
  if (action.type === 'GET_STORAGE') {
    newState.storage = action.payload;
  }
  if (action.type === 'POST_STORAGE') {
    newState.storage = action.payload;
  }
  return newState;
}

export default storageReducer;
