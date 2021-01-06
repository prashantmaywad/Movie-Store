import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers";
//export default createStore(rootReducer);
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);