import axios from "axios";
const createMovieInDB = ({ name, image, genre, description }) => {
  axios
    .post("http://localhost:5000/api/movies/", {
      name,
      image,
      genre,
      description,
      releaseDate: "",
    })
    .then((res) => {
      return res.data;
    })
    .catch((ex) => {
      console.log(ex);
      return "";
    });
};
export default createMovieInDB;
