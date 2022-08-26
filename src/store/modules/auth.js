import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_FIELDS = 'auth/CHANGE_FIELDS';

const initialState = {
  admin: false,
  login: {
    employee_email: '',
    employee_password: '',
  },
};

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const changeFields = createAction(CHANGE_FIELDS, ({ form, key }) => ({
  form,
  key,
}));

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [CHANGE_FIELDS]: (state, { payload: { form, key } }) => ({
      ...state,
      [form]: key,
    }),
  },
  initialState,
);

export default auth;
