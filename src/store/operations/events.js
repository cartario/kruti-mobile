import {ActionCreators} from '../actions/events';

export const Operations = {
  fetchItems: ()=>async (dispatch)=>{
    dispatch(ActionCreators.setLoader(true));    
    try{
      const posts = await fetch('https://rn-self-post-default-rtdb.firebaseio.com/posts.json');   
      dispatch(ActionCreators.loadEvents());      
    } 
    catch(err){
      console.log(err)
    } 
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },
  
}