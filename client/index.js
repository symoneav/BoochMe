import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../public/index.css";

ReactDOM.render(
  console.log("dogs"),
  <Provider store={store}>
    <div>Hello People!!!!!!</div>,
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
