import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const GET_RELEASES = 'GET_RELEASES';
export const GET_RELEASES_SUCCESS = 'GET_RELEASES_SUCCESS';
export const GET_RELEASES_ERROR = 'GET_RELEASES_ERROR';

export const GET_RELEASE = 'GET_RELEASE';
export const GET_RELEASE_SUCCESS = 'GET_RELEASE_SUCCESS';
export const GET_RELEASE_ERROR = 'GET_RELEASE_ERROR';

export const POST_RELEASE = 'POST_RELEASE';
export const POST_RELEASE_SUCCESS = 'POST_RELEASE_SUCCESS';
export const POST_RELEASE_ERROR = 'POST_RELEASE_ERROR';

export const PUT_RELEASE = 'PUT_RELEASE';
export const PUT_RELEASE_SUCCESS = 'PUT_RELEASE_SUCCESS';
export const PUT_RELEASE_ERROR = 'PUT_RELEASE_ERROR';

export const DELETE_RELEASE = 'DELETE_RELEASE';
// export const DELETE_RELEASE_SUCCESS = 'DELETE_RELEASE_SUCCESS';
// export const DELETE_RELEASE_ERROR = 'DELETE_RELEASE_ERROR';

export const CLAER_RELEASE = 'CLAER_RELEASE';

export const getReleases = createPromiseThunk(GET_RELEASES, api.getReleaseList);

export const getRelease = createPromiseThunk(GET_RELEASE, api.getReleaseInfo);

export const postRelease = createPromiseThunk(
  POST_RELEASE,
  api.registerRelease,
);

export const putRelease = createPromiseThunk(PUT_RELEASE, api.updateRelease);

export const deleteRelease = createPromiseThunk(
  DELETE_RELEASE,
  api.deleteRelease,
);

export const clearRelease = () => ({ type: CLAER_RELEASE });
