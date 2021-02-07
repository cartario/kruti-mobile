import {ACTION_TYPES} from '../types';

export const ActionCreators = {
  loadUser: (user) => ({
    type: ACTION_TYPES.LOAD_USER,
    payload: user
  }),
  setLoader: (value) => ({
    type: ACTION_TYPES.SET_USER_LOADER,
    payload: value,
  }),
  updateUser: (obj) => ({
    type: ACTION_TYPES.UPDATE_USER,
    payload: obj
  })
}