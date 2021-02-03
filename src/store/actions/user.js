import {ACTION_TYPES} from '../types';
import {DATA} from '../../DATA';

export const ActionCreators = {
  loadUser: () => ({
    type: ACTION_TYPES.LOAD_USER,
    payload: DATA.user
  }),
}