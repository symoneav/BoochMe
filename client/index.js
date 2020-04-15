import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./yourStore";
import "../public/index.css";

ReactDOM.render(
  <Provider store={store}>
    <div>Hello People!!</div>,
  </Provider>,
  document.getElementById("yourApp") // make sure this is the same as the id of the div in your index.html
);
