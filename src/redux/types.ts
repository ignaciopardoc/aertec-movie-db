import { IApiResponse } from "../interfaces/IApiResponse";
interface ISetSearch {
  type: "SET_SEARCH";
  payload: string;
}

interface ISetMovies {
  type: "SET_MOVIES";
  payload: IApiResponse[];
}

interface ISetLanguage {
  type: "SET_LANGUAGE";
  payload: string;
}

export type TAction = ISetSearch | ISetMovies | ISetLanguage;
