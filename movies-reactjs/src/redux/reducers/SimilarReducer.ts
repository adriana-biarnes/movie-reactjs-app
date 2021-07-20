import {
    GET_SIMILAR_LIST,
    GetSimilarListStateType,
    SimilarListActionTypes,
} from '../types/SimilarTypes';

const initialStateGetSimilarList: GetSimilarListStateType = {
  similarList: []
};

export const getSimilarListReducer = (
    state = initialStateGetSimilarList,
    action: SimilarListActionTypes
  ): GetSimilarListStateType => {
    switch (action.type) {
      case GET_SIMILAR_LIST:
        return {
          ...state,
          similarList: action.payload
        };
      default:
        return state;
    }
  };  