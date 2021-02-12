import {ActionCreators} from '../actions/user';
import {ActionCreators as ActionsCreatorsEvents} from '../actions/events';
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
      
      const lessons = await Http.get('https://kruti-verti-mobile-default-rtdb.firebaseio.com/lessons.json');
      // const scoreLessons = Object.keys(lessons).map((key)=>({
      //   id: key,
      //   score: 0
      // }));

      const scoreLessons = await Http.get('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user/-MSwuIRD2WFnv33p85mB/scoreLessons.json');      
      dispatch(ActionCreators.loadUser({...adaptedUser, scoreLessons}));      
    } 
    catch(err){
      console.log(err)
    } 
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },

  updateUser: ({lessonId, score, totalScore}) => async(dispatch) => {
    dispatch(ActionCreators.setLoader(true)); 
    
    try{
      const scoreLessons = await Http.get('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user/-MSwuIRD2WFnv33p85mB/scoreLessons.json');  
      const newScoreLessons = scoreLessons.map((lesson)=>{

        if(lesson.id===lessonId){
          lesson.score = score;
        }

        return lesson;
      });
      

      const user = await Http.patch('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user/-MSwuIRD2WFnv33p85mB.json', 
      {totalScore, scoreLessons: newScoreLessons})
      dispatch(ActionCreators.updateUser({lessonId, score, totalScore})); 

    }
    catch(err){
      console.log(err)
    }
    finally{
      dispatch(ActionCreators.setLoader(false));
    }
  },
  postFeedback: (text) => async(dispatch) => {
    dispatch(ActionCreators.setLoader(true)); 

    try {
      await Http.post('https://kruti-verti-mobile-default-rtdb.firebaseio.com/user/-MSwuIRD2WFnv33p85mB/feedbacks.json',
        {text}
      ) 
      dispatch(ActionsCreatorsEvents.setSuccessAdded(true));

      setTimeout(()=>{ //поменять на tost
        dispatch(ActionsCreatorsEvents.setSuccessAdded(null));
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