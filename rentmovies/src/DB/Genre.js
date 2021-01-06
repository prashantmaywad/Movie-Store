import axios from "axios";
const createGenre = (genre) => {
  axios
    .post("http://localhost:5000/api/genres/", { name: genre.name })
    .then((res) => {
      return res.data;
    })
    .catch((ex) => {
      console.log(ex);
      return "";
    });
};
const deleteGenre = (genre) => {
  axios
    .delete("http://localhost:5000/api/genres/", {
      data: { name: genre.name },
    })
    .then((res) => {
      var newGenrearray = [];
      genre.forEach((element) => {
        if (element.name !== res.data.name) {
          newGenrearray.push(element);
        }
      });
    })
    .catch((ex) => {});
};
export { createGenre, deleteGenre };
