import {ActionCreators} from '../actions/events';
import {Http} from '../../http';

const BASE_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com/events.json'

export const Operations = {
  fetchItems: ()=>async (dispatch)=>{
    dispatch(ActionCreators.setLoader(true));    
    try{
      const posts = await Http.get('https://rn-self-post-default-rtdb.firebaseio.com/posts.json');   
      dispatch(ActionCreators.loadEvents());      
    } 
    catch(err){
      console.log(err)
    } 
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },

  addEvent: (event)=>async(dispatch)=>{
    dispatch(ActionCreators.setLoader(true));
    try{
      const newEvent = {...event,        
        checked: false,
        booked: false,
        posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612619754/events/eventImageMock.jpg',
        comment: 'new event',
      };
      const response = await Http.post(BASE_URL, newEvent);
      dispatch(ActionCreators.addEvent({...newEvent, id: response.name}));
      dispatch(ActionCreators.setSuccessAdded(true));

      setTimeout(()=>{ //поменять на tost
        dispatch(ActionCreators.setSuccessAdded(null));
      },2000)
    }
    catch(err){
      console.log(err)
    }
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  }
  
}