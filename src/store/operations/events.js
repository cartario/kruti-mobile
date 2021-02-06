import {ActionCreators} from '../actions/events';
import {Http} from '../../http';

const BASE_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com/events.json';
const UPDATE_LIST_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com/update-list-events.json';
const REMOVE_LIST_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com/delete-list-events.json';

export const Operations = {
  fetchItems: ()=>async (dispatch)=>{
    dispatch(ActionCreators.setLoader(true));    
    try{
      const events = await Http.get(BASE_URL);      

      const newEvents = Object.keys(events).map((key)=>({
        ...events[key],
        id: key,
      }))      
      dispatch(ActionCreators.loadEvents(newEvents));      
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
  },

  addEventToUpdateList: (event)=>async(dispatch)=>{
    try{
      const newEvent = {...event,        
        checked: false,
        booked: false,
        posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612619754/events/eventImageMock.jpg',
        comment: 'update event',
      };
      await Http.post(UPDATE_LIST_URL, newEvent);
      dispatch(ActionCreators.setSuccessAdded(true));

      setTimeout(()=>{ //поменять на tost
        dispatch(ActionCreators.setSuccessAdded(null));
      },2000)
    }
    catch(err){
      console.log(err)
    }
  },

  addEventToRemoveList: (event)=>async(dispatch)=>{
    try{
      // const newEvent = {...event,        
      //   checked: false,
      //   booked: false,
      //   posterUrl: 'https://res.cloudinary.com/dwhyb2a2q/image/upload/v1612619754/events/eventImageMock.jpg',
      //   comment: 'update event',
      // };
      await Http.post(REMOVE_LIST_URL, {id: event.id});
      dispatch(ActionCreators.setSuccessAdded(true));

      setTimeout(()=>{ //поменять на tost
        dispatch(ActionCreators.setSuccessAdded(null));
      },2000)
    }
    catch(err){
      console.log(err)
    }
  }


}