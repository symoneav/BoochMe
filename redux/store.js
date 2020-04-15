import { createStore, applyMiddleware } from "redux";
import companiesReducer from "./companiesReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  companiesReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
