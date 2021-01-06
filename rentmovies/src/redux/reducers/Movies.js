import { CREATE_MOVIE, DELETE_MOVIE, LOAD_MOVIES } from "./../actionTypes";
var initialState = {
  Movies: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MOVIE: {
      return { ...state, Movies: [...state.Movies].push(action.Movie) };
    }
    case LOAD_MOVIES: {
      return { ...state, Movies: action.Movies };
    }
    case DELETE_MOVIE: {
      var movies = [...state.Movies];
      var index = movies.findIndex((movie) => movie.name === action.Movie.name);
      movies = movies.slice(index, 1);
      return { ...state, Movies: movies };
    }
    default:
      return state;
  }
};
export default movieReducer;
