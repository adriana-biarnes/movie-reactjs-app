import { combineReducers } from 'redux';
import { getMoviesShowsListReducer } from './MovieReducer';

const rootReducer = combineReducers({
  moviesShowsList: getMoviesShowsListReducer,
});

export default rootReducer;