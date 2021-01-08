import { CREATE_MOVIE, DELETE_MOVIE, LOAD_MOVIES } from "./../actionTypes";
import createMovieInDB from "../../DB/Movie";
var initialMovies = [];
const movieReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case CREATE_MOVIE: {
      var index = state.find((element) => element.name === action.Movie.name);
      var movie = state;
      if (index === undefined) {
        createMovieInDB(action.Movie);
        movie = [...state, action.Movie];
      }
      return movie;
    }
    case LOAD_MOVIES: {
      return action.Movies;
    }
    case DELETE_MOVIE: {
      var movies = [...state.Movies];
      var indexMovie = movies.findIndex(
        (movie) => movie.name === action.Movie.name
      );
      movies = movies.slice(indexMovie, 1);
      return { ...state, Movies: movies };
    }
    default:
      return state;
  }
};
export default movieReducer;
