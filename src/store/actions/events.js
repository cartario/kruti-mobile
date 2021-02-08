import { ACTION_TYPES } from '../types';

export const ActionCreators = {
  loadEvents: (events=[]) => ({
    type: ACTION_TYPES.LOAD_EVENTS,
    payload: events,
  }),
  toggleBooked: (id) => ({
    type: ACTION_TYPES.TOGGLE_BOOKED_EVENT,
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
