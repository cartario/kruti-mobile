import {ActionCreators} from '../actions/lessons';
import {Http} from '../../http';

const BASE_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com';

const adapter = (response) => {
  const keys = Object.keys(response);
  return keys.map((key)=>{
    return {
      id: key,
      ...response[key]
    }
  });
}

export const Operations = {
  fetchLessons: ()=>async (dispatch)=>{
    dispatch(ActionCreators.setLoader(true));
    try{
      const response = await Http.get(`${BASE_URL}/lessons.json`);  
        
      const adaptedLessons = adapter(response);    
      dispatch(ActionCreators.loadLessons(adaptedLessons));  
    } 
    catch(err){
      console.log(err)
    } 
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },

  updateLessonToggleBooked: (id) => async(dispatch) => {
    try{
      const lesson = await Http.get(`${BASE_URL}/lessons/${id}.json`);
      await Http.patch(`${BASE_URL}/lessons/${id}.json`, {booked: !lesson.booked})
      dispatch(ActionCreators.toggleBooked(id))
    }
    catch(err){
      console.log(err)
    }    
  },
}
