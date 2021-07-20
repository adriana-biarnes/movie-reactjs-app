import { combineReducers } from 'redux';
import { getDetailsReducer } from './DetailsReducer';
import { getMoviesShowsListReducer } from './MovieReducer';

const rootReducer = combineReducers({
  moviesShowsList: getMoviesShowsListReducer,
  movieDetails: getDetailsReducer,
});

export default rootReducer;