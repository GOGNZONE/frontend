function bomReducer(state, action) {
  if (state === undefined) {
    return {
      bomList: [],
      bom: {
        bomName: '',
        bomQuantity: '',
        bomPrice: '',
        bomStandard: '',
        bomUnit: '',
        bomDescription: '',
        bomFile: '',
      },
    };
  }
  const newState = { ...state };
  if (action.type === 'GET_BOM_LIST') {
    newState.bomList = action.payload;
  }

  if (action.type === 'GET_BOM') {
    newState.bom = action.payload;
  }
  if (action.type === 'POST_BOM') {
    newState.bom = action.payload;
  }
  return newState;
}

export default bomReducer;
