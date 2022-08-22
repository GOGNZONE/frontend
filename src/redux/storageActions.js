import apis from '../Apis/index';
import { storageActions } from '../reducers/storageReducer';
function getStorage() {
  return async (dispatch, getState) => {
    const data = getStorageList();
    dispatch(storageActions.getAllStorage({ data }));
  };
}
