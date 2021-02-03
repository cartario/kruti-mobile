import {ACTION_TYPES} from '../types';
import {DATA} from '../../DATA';

export const ActionCreators = {
  loadLessons: () => ({
    type: ACTION_TYPES.LOAD_LESSONS,
    payload: DATA.lessons
  }),
  toggleBooked: (id)=>({
    type: ACTION_TYPES.TOGGLE_BOOKED_LESSONS,
    payload: id
  })
}