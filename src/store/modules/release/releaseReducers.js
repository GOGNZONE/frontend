import { handleAsyncActions, reducerUtils } from 'lib/asyncUtils';
import * as types from './releaseActions';

const initialState = {
  releases: reducerUtils.initial(),
  release: reducerUtils.initial(),
};

export const releaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RELEASES:
    case types.GET_RELEASES_SUCCESS:
    case types.GET_RELEASES_ERROR:
      return handleAsyncActions(types.GET_RELEASES, 'releases')(state, action);
    case types.GET_RELEASE:
    case types.GET_RELEASE_SUCCESS:
    case types.GET_RELEASE_ERROR:
      return handleAsyncActions(types.GET_RELEASE, 'release')(state, action);
    case types.POST_RELEASE:
    case types.POST_RELEASE_SUCCESS:
    case types.POST_RELEASE_ERROR:
      return handleAsyncActions(types.POST_RELEASE, 'releases')(state, action);
    case types.PUT_RELEASE:
    case types.PUT_RELEASE_SUCCESS:
    case types.PUT_RELEASE_ERROR:
      return handleAsyncActions(types.PUT_RELEASE, 'release')(state, action);
    case types.DELETE_RELEASE:
      return {
        releases: {
          loading: false,
          data: state.releases.data
            ? state.releases.data.filter(
                (release) => release.releaseId !== action.param,
              )
            : null,
        },
        release: {
          loading: false,
          data: null,
        },
      };
    case types.CLAER_RELEASE:
      return {
        ...state,
        release: reducerUtils.initial(),
      };
    default:
      return state;
  }
};
