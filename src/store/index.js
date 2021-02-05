import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as lessons} from '../store/reducers/lessons';
import {reducer as user} from '../store/reducers/user';
import {reducer as events} from '../store/reducers/events';

const rootReducer = combineReducers({
  lessons, user, events
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
