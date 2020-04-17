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

// var bottleIcon = L.icon({
//   iconUrl: <img src="beer.png" />,

//   iconSize: [38, 95], // size of the icon
// size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
// });

// var marker = L.marker([41.8881084, -87.6320523], { icon: bottleIcon }).addTo(
//   mymap
// );
var wfMarkers = [
  [41.87569, -87.63503],
  [41.92475, -87.70137],
];
var wfMarker1 = L.marker(wfMarkers[0]).addTo(mymap);
wfMarker1
  .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
  .openPopup();

var wfMarker2 = L.marker(wfMarkers[1]).addTo(mymap);
wfMarker2
  .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
  .openPopup();
// wfMarker
//   .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
//   .openPopup();

var marker = L.marker([41.8881084, -87.6320523]).addTo(mymap);

marker
  .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
  .openPopup();

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
