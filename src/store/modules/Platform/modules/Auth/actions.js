import * as types from './types';

export const usersFetch = value => ({
  type: types.FETCING_USERS,
  payload: value
});

export const setUsers = ({ objById, arrayIds }) => ({
  type: types.SET_USERS,
  payload: {
    userById: objById,
    usersOrder: arrayIds
  }
});
