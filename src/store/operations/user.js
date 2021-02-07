import {ActionCreators} from '../actions/user';
import {Http} from '../../http';
import {DATA} from '../../DATA';

const BASE_URL = 'https://kruti-verti-mobile-default-rtdb.firebaseio.com/user.json';


export const Operations = {
  fetchUser: ()=>async (dispatch)=>{
    dispatch(ActionCreators.setLoader(true));    
    try{
      const user = await Http.get(BASE_URL);  
      const adaptedUser = Object.values(user)[0];    
     
      // const newEvents = Object.keys(events).map((key)=>({
      //   ...events[key],
      //   id: key,
      // }))      
      dispatch(ActionCreators.loadUser(adaptedUser));      
    } 
    catch(err){
      console.log(err)
    } 
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },

  updateUser: (obj) => async(dispatch) => {
    dispatch(ActionCreators.setLoader(true)); 

    try{
      const user = await Http.patch('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user/-MSwuIRD2WFnv33p85mB.json', 
      obj)
      dispatch(ActionCreators.updateUser(obj)); 

    }
    catch(err){
      console.log(err)
    }
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },
}