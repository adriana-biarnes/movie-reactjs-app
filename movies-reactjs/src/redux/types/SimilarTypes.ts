import { MoviesShowsList } from '../interfaces/MoviesShowsList';

export const GET_SIMILAR_LIST = 'GET_SIMILAR_LIST';

export interface GetSimilarListStateType {
  similarList: MoviesShowsList[];
}

interface GetSimilarListActionType {
  type: typeof GET_SIMILAR_LIST;
  payload: MoviesShowsList[];
}
export type SimilarListActionTypes = GetSimilarListActionType;