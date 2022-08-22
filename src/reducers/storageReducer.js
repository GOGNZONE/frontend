import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storageList: [],
  storage: '',
};

const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    getAllStorage(state, action) {
      state.storageList = action.payload.data;
    },
    getStorage(state, action) {
      state.storage = action.payload.data;
    },
  },
});

// console.log('pppp', storageSlice);
export const storageActions = storageSlice.actions;
export default storageSlice.reducer;
