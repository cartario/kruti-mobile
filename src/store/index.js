import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as lessons} from '../store/reducers/lessons';

const rootReducer = combineReducers({
  lessons
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
