import { MoviesShowsList } from '../interfaces/MoviesShowsList';

export const GET_MOVIES_SHOWS_LIST = 'GET_MOVIES_SHOWS_LIST';

export interface GetMoviesShowsListStateType {
  moviesShowsList: MoviesShowsList[];
}

interface GetMoviesShowsListActionType {
  type: typeof GET_MOVIES_SHOWS_LIST;
  payload: MoviesShowsList[];
}
export type MoviesShowsListActionTypes = GetMoviesShowsListActionType;