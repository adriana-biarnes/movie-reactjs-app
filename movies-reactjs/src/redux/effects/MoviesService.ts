import { getMoviesShowsListAction } from "../actions/MovieActions";
import { Dispatch } from "redux";
import { MoviesShowsListActionTypes } from "../types/MovieTypes";

export const getMoviesShowsListService = () => {
    return function (dispatch: Dispatch<MoviesShowsListActionTypes>) {
        const MOVIES_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=38f9fc2cbc14220b22848e8449255ab4';
        fetch(MOVIES_URL, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getMoviesShowsListAction(data.results));
                return data.results;
            });
    };
};