import {ACTION_TYPES} from '../types';
import {DATA} from '../../DATA';

export const ActionCreators = {
  loadLessons: (lessons) => ({
    type: ACTION_TYPES.LOAD_LESSONS,
    payload: lessons
  }),
  toggleBooked: (id)=>({
    type: ACTION_TYPES.TOGGLE_BOOKED_LESSONS,
    payload: id
  }),
  setLoader: (value)=>({
    type: ACTION_TYPES.SET_LESSONS_LOADER,
    payload: value
  }),
}