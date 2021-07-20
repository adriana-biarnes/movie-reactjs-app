import { GET_DETAILS, DetailsActionTypes } from "../types/DetailsTypes";
import { IMovie } from '../interfaces/IMovie';

export const getDetailsAction = (movieDetails: IMovie): DetailsActionTypes => {
    return {
        type: GET_DETAILS,
        payload: movieDetails,
    };
};