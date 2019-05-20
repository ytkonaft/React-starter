import { createReducer } from 'store/utils';
import * as types from './types';

const usersInitState = {
  fetching: true,
  users: {
    userById: null,
    usersOrder: null
  },
  error: null
};

const usersReducer = createReducer(usersInitState)({
  [types.FETCING_USERS]: (state, { payload }) => ({
    ...state,
    fetching: payload
  }),
  [types.SET_USERS]: (state, { payload }) => ({
    ...state,
    users: {
      ...payload
    }
  })
});

export default usersReducer;
