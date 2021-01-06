import { CREATE_GENRE, DELETE_GENRE, LOAD_GENRES } from "./../actionTypes";
import { createGenre, deleteGenre } from "../../DB/Genre";
var initialGenre = [];

const genreReducer = (state = initialGenre, action) => {
  switch (action.type) {
    case CREATE_GENRE: {
      var index = state.find((element) => element.name === action.Genre.name);
      var genre = state;
      if (index === undefined) {
        createGenre(action.Genre);
        genre = [...state, action.Genre];
      }
      return genre;
    }
    case LOAD_GENRES: {
      return action.Genre;
    }
    case DELETE_GENRE: {
      var genres = [...state];
      var genreIndex = genres.findIndex(
        (genre) => genre.name === action.Genre.name
      );
      if (genreIndex !== -1) {
        deleteGenre(action.Genre);
        genres.splice(genreIndex, 1);
      }
      return genres;
    }
    default:
      return state;
  }
};
export default genreReducer;
