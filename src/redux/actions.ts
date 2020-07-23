import { IApiResponse } from "../interfaces/IApiResponse";

export const setSeachText = (searchText: string) => {
  return { type: "SET_SEARCH", payload: searchText };
};

export const setMovies = (movies: IApiResponse[]) => {
  return { type: "SET_MOVIES", payload: movies };
};

export const setLanguage = (language: string) => {
  return { type: "SET_LANGUAGE", payload: language };
};
