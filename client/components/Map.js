import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {connect} from 'react-redux'
import {findInStock} from '../store/kombuchas'

class Map extends React.Component {
    constructor(){
        super()
        this.handleChange=this.handleChange.bind(this)
    }


productStocked(item){
    this.props.findInStock(item)
}

handleChange(evt){

}
  render() {
    return (
        <div>
        <div>
      <LeafletMap
        center={[41.8881084, -87.6320523]}
        zoom={13}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='https://api.mapbox.com/styles/v1/symoneav/ck93efi6e01o61imghlqsa45e/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3ltb25lYXYiLCJhIjoiY2s3dXdndmpoMDR3MjNmcnk2dWV0eW9seSJ9.ZKSyDGUeOYPFUPYBnviS1Q'
          
        />
        <Marker position={[41.8881084, -87.6320523]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
      </div>
    <div>
      <aside>
{/* <div><a id = "map-link" target="_blank"></a>Hello</a></div> */}
<div class='panel' id='options-panel'>
  <div>
  <div>
    <h2>Brands</h2>
    <select id='brand-options'  onChange={this.handleChange}>
      <option>Kombucha 365</option>
      <option>WholeSome Booch</option>
      <option>Momma's Kombucha</option>
    </select>
  </div>
  <div>
    <h3>
      Flavor
    </h3>
    <select id='brand-flavor-options'>
      <option> Ginger Honey</option>
      <option>Rose Mint</option>
      <option>Sage Lemongrass</option>
    </select>
  </div>
  <div>
    <h3>
      Distance
    </h3>
    <select id='mile-radius'>
      <option>1 mile</option>
      <option>5 mile</option>
      <option>10 mile</option>
      <option>15 mile</option>
      <option>20+ mile</option>
    </select>
  </div>
</div>
<p>
<button  type="button" class='find-kombucha' id='find-me' onClick={()=>this.productStocked(product)}>
  <p id = "status"></p>
  BoochMe!
</button>
</p>
</div>
</aside> 
</div>
</div>
    );
  }
}

const mapDispatch=(dispatch)=>({
    findInStock:(item)=>dispatch(findInStock(item))
})

export default connect(null,mapDispatch)(Map)





