import {ActionCreators} from '../actions/lessons';

export const Operations = {
  fetchItems: ()=>async (dispatch)=>{
    dispatch(ActionCreators.loadLessons());    
  },
}
