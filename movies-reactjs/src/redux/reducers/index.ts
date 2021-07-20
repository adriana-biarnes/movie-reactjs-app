import { combineReducers } from 'redux';
import { getDetailsReducer } from './DetailsReducer';
import { getMoviesShowsListReducer } from './MovieReducer';
import { getSimilarListReducer } from './SimilarReducer';

const rootReducer = combineReducers({
  moviesShowsList: getMoviesShowsListReducer,
  movieDetails: getDetailsReducer,
  similarList: getSimilarListReducer,
});

export default rootReducer;