import { combineReducers } from "redux";
import { IStore } from "../../interfaces/IStore";
import searchText from "./searchReducer";
import movieData from "./moviesReducer";
import language from "./languageReducer";

export default combineReducers<IStore>({
  searchText,
  movieData,
  language,
});
