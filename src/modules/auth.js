import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_FIELDS = 'auth/CHANGE_FIELDS';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';

export const chagneField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const chagneFields = createAction(CHANGE_FIELDS);
export const initializeForm = createAction(INITIALIZE_FORM);
export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
  login: {
    employee_email: '',
    employee_password: '',
  },
  register: {
    form: 'register',
    employee_id: '',
    employee_password: '',
    employee_name: '',
    employee_email: '',
    employee_phone: '',
    employee_address: '',
    employee_hiredate: '',
    employee_image: '',
    employee_role: '',
  },
};

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
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_INPUT]: (state, { payload: { form, input } }) => ({
      ...state,
      [form]: input,
    }),
  },
  initialState,
);

export default auth;
