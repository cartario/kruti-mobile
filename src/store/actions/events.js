import { ACTION_TYPES } from '../types';
import { DATA } from '../../DATA';

export const ActionCreators = {
  loadEvents: () => ({
    type: ACTION_TYPES.LOAD_EVENTS,
    payload: DATA.events,
  }),
  toggleBooked: (id) => ({
    // type: ACTION_TYPES.TOGGLE_BOOKED_LESSONS,
    payload: id,
  }),
  setLoader: (value) => ({
    type: ACTION_TYPES.SET_LOADER,
    payload: value,
  }),
  setSuccessAdded: (value) => ({
    type: ACTION_TYPES.SET_SUCCESS_ADDED,
    payload: value,
  }),
  addEvent: (event) => ({
    type: ACTION_TYPES.ADD_EVENT,
    payload: event,
  }),
};
