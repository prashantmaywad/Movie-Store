import {
  REGISTER_USER_SUCCESS,
  USER_REGISTERING,
  REGISTER_USER_ERROR,
} from "./../actionTypes";
var initialUser = [
  {
    loading: false,
    user: {},
    error: "",
  },
];

var userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case USER_REGISTERING: {
      return { loading: true, user: {}, error: "" };
    }
    case REGISTER_USER_SUCCESS: {
      return { loading: false, user: action.User, error: "" };
    }
    case REGISTER_USER_ERROR: {
      return { loading: false, user: {}, error: action.error };
    }
    default:
      return state;
  }
};
export default userReducer;
