import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as lessons} from '../store/reducers/lessons';
import {reducer as user} from '../store/reducers/user';

const rootReducer = combineReducers({
  lessons, user
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
