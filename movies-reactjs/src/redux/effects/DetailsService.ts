import { Dispatch } from "redux";
import { getDetailsAction } from "../actions/DetailsAction";
import { DetailsActionTypes } from "../types/DetailsTypes";

export const getDetailsService = (id:number) => {
    return function (dispatch: Dispatch<DetailsActionTypes>) {
        const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=38f9fc2cbc14220b22848e8449255ab4`;
        fetch(DETAILS_URL, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getDetailsAction(data));
                return data;
            });
    };
};