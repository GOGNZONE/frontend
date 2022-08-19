import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_SPEC_FIELD = 'bom/CHANGE_SPEC_FIELD';
const CHANGE_LOG_FIELD = 'bom/CHANGE_LOG_FIELD';
const INITIAL_CHANGE = 'bom/INITIAL_CHANGE';
const PLUS_MODIFY_LINE = 'bom/PLUS_MODIFY_LINE';
const DELETE_REGISTER_LINE = 'bom/DELETE_REGISTER_LINE';
const DELETE_MODIFY_LINE = 'bom/DELETE_MODIFY_LINE';

export const changeLogField = createAction(CHANGE_LOG_FIELD);
export const changeSpecField = createAction(CHANGE_SPEC_FIELD);
export const initialChange = createAction(INITIAL_CHANGE);
export const plusModifyLine = createAction(PLUS_MODIFY_LINE);
export const deleteRegisterLine = createAction(DELETE_REGISTER_LINE);
export const deleteModifyLine = createAction(DELETE_MODIFY_LINE);

const initialState = {
  bom_log: {
    pro_cd: '',
    pro_name: '',
    ln_cd: '',
    ft_cd: '',
    ln_num: '',
    ln_ox: 1,
  },
  bom_spec: [
    {
      bom_cd: '',
      sj_cd: '',
      sj_name: '',
      sj_type: '',
      sj_amt: '',
      sj_unit: '',
      bom_crud: '',
    },
  ],
};
const bom = handleActions(
  {
    [CHANGE_LOG_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [CHANGE_SPEC_FIELD]: (state, { payload: { num, key, value } }) =>
      produce(state, (draft) => {
        draft.bom_spec[num][key] = value;
      }),
    [INITIAL_CHANGE]: (state, { payload: { form, key } }) => ({
      ...state,
      [form]: key,
    }),
    [PLUS_MODIFY_LINE]: (state, { payload: { key } }) =>
      produce(state, (draft) => {
        draft.bom_spec.push(key);
      }),
    [DELETE_REGISTER_LINE]: (state, { payload: { form, key } }) =>
      produce(state, (draft) => {
        draft[form].splice(key, 1);
      }),
    [DELETE_MODIFY_LINE]: (state, { payload: { num, key } }) =>
      produce(state, (draft) => {
        draft.bom_spec[num][key] = '2';
      }),
  },
  initialState,
);
export default bom;
