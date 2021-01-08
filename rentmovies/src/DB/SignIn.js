import axios from "axios";
import {
  REGISTER_USER_SUCCESS,
  USER_REGISTERING,
  REGISTER_USER_ERROR,
} from "../redux/actionTypes";
const registerUser = (name, email, password) => {
  return function (dispatch) {
    console.log("55555555555");
    dispatch({
      type: USER_REGISTERING,
    });
    axios
      .post("http://localhost:5000/api/user", { name, email, password })
      .then((res) => {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          User: res.data,
        });
      })
      .catch((ex) => {
        dispatch({
          type: REGISTER_USER_ERROR,
          error: ex,
        });
      });
  };
};
export default registerUser;
