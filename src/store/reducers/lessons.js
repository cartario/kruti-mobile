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
      return {...state, items: payload, bookedItems: payload.filter((lesson)=>lesson.booked)};

    case ACTION_TYPES.TOGGLE_BOOKED_LESSONS:
      const lessons = state.items.map((item)=>{
        if(item.id===payload){
          item.booked = !item.booked
        }
        return item
      })
      return {...state, items: lessons, bookedItems: lessons.filter((item)=>item.booked)};

    case ACTION_TYPES.SET_LESSONS_LOADER:
      return {...state, isLoaded: payload};
      
    default:
      return state;
  }
};
