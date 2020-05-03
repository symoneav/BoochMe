import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:${props=>props.width}
    height:${props=>props.height}

`

export default class Map extends React.Component{
    componentDidMount(){
        this.map=L.map('map', {
              center: [41.8881084, -87.6320523],
              zoom: 13,
              zoomControl:false
            })
        L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",

  {
      detectRetina:true,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "symoneav/ck93efi6e01o61imghlqsa45e",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic3ltb25lYXYiLCJhIjoiY2s3dXdndmpoMDR3MjNmcnk2dWV0eW9seSJ9.ZKSyDGUeOYPFUPYBnviS1Q",
  }
).addTo(this.map)}
    


    render(){
        return (
            <Wrapper width='20rem' height='calc(100vh - 3rem)' id='map'/>
        )
    }
}