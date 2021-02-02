import { ACTION_TYPES } from "../types";

const initialState = {
  items: [],
  bookedItems: [],
  isLoaded: false, 
};

export const reducer = (state=initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case ACTION_TYPES.LOAD_LESSONS: 
    
      return {...state, items: payload}
    default:
      return state;
  }
};
