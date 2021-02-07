import { ACTION_TYPES } from "../types";

const initialState = {
  level: null,
  totalScore: null,
  isLoaded: false, 
};

export const reducer = (state=initialState, action) => {
  const {type, payload} = action;
  
  switch(type){
    case ACTION_TYPES.LOAD_USER:    
      return {...state, ...payload};
    case ACTION_TYPES.SET_USER_LOADER:
      return {...state, isLoaded: payload};
    case ACTION_TYPES.UPDATE_USER: 
      return {...state, ...payload}
    default:
      return state;
  }
};
