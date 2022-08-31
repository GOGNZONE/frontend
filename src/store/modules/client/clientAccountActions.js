import * as api from 'apis';
import { createPromiseThunk } from 'lib/asyncUtils';

export const POST_CLIENT_ACCOUNT = 'POST_CLIENT_ACCOUNT';
export const POST_CLIENT_ACCOUNT_SUCCESS = 'POST_CLIENT_ACCOUNT_SUCCESS';
export const POST_CLIENT_ACCOUNT_ERROR = 'POST_CLIENT_ACCOUNT_ERROR';

export const PUT_CLIENT_ACCOUNT = 'PUT_CLIENT_ACCOUNT';
export const PUT_CLIENT_ACCOUNT_SUCCESS = 'PUT_CLIENT_ACCOUNT_SUCCESS';
export const PUT_CLIENT_ACCOUNT_ERROR = 'PUT_CLIENT_ACCOUNT_ERROR';

export const registerClientAccount = createPromiseThunk(
  POST_CLIENT_ACCOUNT,
  api.registerAccount,
);

export const updateClientAccount = createPromiseThunk(
  PUT_CLIENT_ACCOUNT,
  api.updateAccount,
);
