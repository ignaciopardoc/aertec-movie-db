import { IApiResponse } from "./IApiResponse";
export interface IStore {
  searchText: string;
  movieData: IApiResponse[];
  language: string;
}
