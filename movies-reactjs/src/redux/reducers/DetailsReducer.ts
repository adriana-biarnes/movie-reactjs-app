import {
    GET_DETAILS,
    GetDetailsStateType,
    DetailsActionTypes,
} from '../types/DetailsTypes';

const initialStateGetDetails: GetDetailsStateType = {
  movieDetails: [],
  selected: false,
};

export const getDetailsReducer = (
    state = initialStateGetDetails,
    action: DetailsActionTypes
  ): GetDetailsStateType => {
    switch (action.type) {
      case GET_DETAILS:
        return {
          ...state,
          movieDetails: action.payload
        };
      default:
        return state;
    }
  };  