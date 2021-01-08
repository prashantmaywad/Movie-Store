import { combineReducers } from "redux";
import genreReducer from "./Genre";
import movieReducer from "./Movies";
import userReducer from "./User";

export default combineReducers({ Genres: genreReducer, Movies: movieReducer,User:userReducer });
