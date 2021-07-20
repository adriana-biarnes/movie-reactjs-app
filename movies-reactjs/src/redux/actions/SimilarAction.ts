import { GET_SIMILAR_LIST, SimilarListActionTypes } from "../types/SimilarTypes";
import { MoviesShowsList } from '../interfaces/MoviesShowsList';

export const getSimilarListAction = (similarList: MoviesShowsList[]): SimilarListActionTypes => {
    return {
        type: GET_SIMILAR_LIST,
        payload: similarList,
    };
};