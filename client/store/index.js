import { createStore, applyMiddleware,combineReducers } from "redux";
// import {composeWithDevTools} from 'redux-devtools-extension'
import companiesReducer from "./companiesReducer";
import kombuchas from './kombuchas'
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const reducer = combineReducers({
  companies:companiesReducer,
  kombuchas
})

const middleware= applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))


const store = createStore(
  reducer,middleware
  );

export default store;