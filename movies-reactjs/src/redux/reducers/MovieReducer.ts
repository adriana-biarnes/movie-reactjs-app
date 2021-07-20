import {
    GET_MOVIES_SHOWS_LIST,
    GetMoviesShowsListStateType,
    MoviesShowsListActionTypes,
} from '../types/MovieTypes';

export const initialStateGetMoviesShowsList: GetMoviesShowsListStateType = {
  moviesShowsList: []
};

export const getMoviesShowsListReducer = (
    state = initialStateGetMoviesShowsList,
    action: MoviesShowsListActionTypes
  ): GetMoviesShowsListStateType => {
    switch (action.type) {
      case GET_MOVIES_SHOWS_LIST:
        return {
          ...state,
          moviesShowsList: action.payload
        };
      default:
        return state;
    }
  }; 

