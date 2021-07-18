import { GET_MOVIES_SHOWS_LIST, MoviesShowsListActionTypes } from "../types/MovieTypes";
import { MoviesShowsList } from '../interfaces/MoviesShowsList';

export const getMoviesShowsListAction = (moviesShowsList: MoviesShowsList[]): MoviesShowsListActionTypes => {
    return {
        type: GET_MOVIES_SHOWS_LIST,
        payload: moviesShowsList,
    };
};