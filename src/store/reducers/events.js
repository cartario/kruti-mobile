import { ACTION_TYPES } from "../types";

const initialState = {
  items: [],
  bookedItems: [],
  isLoaded: false, 
};

export const eventsReducer = (state=initialState, action) => {
  const {type, payload} = action; 
 
  switch(type){
    case ACTION_TYPES.LOAD_EVENTS:    
      return {...state, items: payload.filter((item)=>item.checked)};
    case ACTION_TYPES.SET_LOADER:

      return {...state, isLoaded: payload}
    // case ACTION_TYPES.TOGGLE_BOOKED_LESSONS:
    //   const lessons = state.items.map((item)=>{
    //     if(item.id===payload){
    //       item.booked = !item.booked
    //     }
    //     return item
    //   })
    //   return {...state, items: lessons}
    default:
      return state;
  }
};
