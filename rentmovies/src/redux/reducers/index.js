import { combineReducers } from "redux";
import genreReducer from "./Genre";
import movieReducer from "./Movies";

export default combineReducers({ Genres: genreReducer, Movies: movieReducer });
