import { getSimilarListAction } from "../actions/SimilarAction";
import { Dispatch } from "redux";
import { SimilarListActionTypes } from "../types/SimilarTypes";

export const getSimilarListService = (id:number) => {
    return function (dispatch: Dispatch<SimilarListActionTypes>) {
        const SIMILAR_LIST_URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=38f9fc2cbc14220b22848e8449255ab4&language=en-US&page=1&limit=20`;
        fetch(SIMILAR_LIST_URL, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getSimilarListAction(data.results));
                console.log('similar', data.results)
                return data.results;
            });
    };
};
