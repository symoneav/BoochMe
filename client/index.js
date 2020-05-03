import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

// establishes socket connection


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

// var mymap = L.map("map", {
//   center: [41.8881084, -87.6320523],
//   zoom: 13,
// });

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",

//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "symoneav/ck93efi6e01o61imghlqsa45e",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken:
//       "pk.eyJ1Ijoic3ltb25lYXYiLCJhIjoiY2s3dXdndmpoMDR3MjNmcnk2dWV0eW9seSJ9.ZKSyDGUeOYPFUPYBnviS1Q",
//   }
// ).addTo(mymap);


// var wfMarkers = [
//   [41.87569, -87.63503],
//   [41.92475, -87.70137],
// ];
// var wfMarker1 = L.marker(wfMarkers[0]).addTo(mymap);
// wfMarker1
//   .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
//   .openPopup();

// var wfMarker2 = L.marker(wfMarkers[1]).addTo(mymap);
// wfMarker2
//   .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
//   .openPopup();


// var marker = L.marker([41.8881084, -87.6320523]).addTo(mymap);

// marker
//   .bindPopup("<b>We got the Booch!</b><br>Sage Lemongrass is in stock here!")
//   .openPopup();

  
  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      console.log('retrieved your location', mapLink.textContent)
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
      console.log('err',mapLink.textContent)
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);


