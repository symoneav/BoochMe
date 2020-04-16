// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import "../public/index.css";
// import Routes from "./Routes";
// import Map from "./Map";

var mymap = L.map("map", {
  center: [41.8881084, -87.6320523],
  zoom: 13,
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",

  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "symoneav/ck93efi6e01o61imghlqsa45e",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic3ltb25lYXYiLCJhIjoiY2s3dXdndmpoMDR3MjNmcnk2dWV0eW9seSJ9.ZKSyDGUeOYPFUPYBnviS1Q",
  }
).addTo(mymap);
// ReactDOM.render(
//   <Provider store={store}>
//     <Routes />
//   </Provider>,
//   document.getElementById("app") // make sure this is the same as the id of the div in your index.html
// );

// ReactDOM.render(
//   <Provider>
//     <Map />
//   </Provider>,
//   document.getElementById("mapid") // make sure this is the same as the id of the div in your index.html
// );
