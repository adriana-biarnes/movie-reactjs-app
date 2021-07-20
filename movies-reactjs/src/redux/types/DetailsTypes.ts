import { IMovie } from '../interfaces/IMovie';

export const GET_DETAILS = 'GET_DETAILS';

export interface GetDetailsStateType {
  movieDetails: IMovie | null;
}

interface GetDetailsActionType {
  type: typeof GET_DETAILS;
  payload: IMovie;
}
export type DetailsActionTypes = GetDetailsActionType;
