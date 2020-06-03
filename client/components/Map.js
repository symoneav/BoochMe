import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {connect} from 'react-redux'
import {findInStock} from '../store/kombuchas'
import {fetchCompany} from '../store/companiesReducer'

class Map extends React.Component {
    constructor(){
        super()
        this.state={
          company:'',
          flavor:''
        }
        this.handleChange1=this.handleChange1.bind(this)
         this.handleChange2=this.handleChange2.bind(this)
         this.handleSubmit=this.handleSubmit.bind(this)
    }

handleSubmit(evt){
  evt.preventDefault()
  const kombuchaId=Number(evt.target.value)
  this.setState({flavor:kombuchaId})
  this.props.findInStock({id:kombuchaId})
  console.log('ran submit')
  
}


handleChange1(evt){
    console.log(Number(evt.target.value))
    const companyId= Number(evt.target.value)
    this.setState({company:companyId})
    this.props.getCompany({id:companyId})
    console.log('ran change 1')
    // console.log( 'flavor',evt.target.value)
    // const kombuchaId= Number(evt.target.flavor.value)
    // this.props.getKombuchas()
    // this.setState({flavors:this.props.company.kombuchas})

}

handleChange2(evt){
    const kombuchaId=Number(evt.target.value)
    this.setState({flavor:kombuchaId})
    console.log('kombucha',kombuchaId)
    this.props.findInStock({id:kombuchaId})
    console.log('ran change 2')
}


  render() {
    console.log('grape',this.props.company)
    console.log('banana',this.props.kombuchas)
    const distributors = this.props.kombuchas
    console.log('one', distributors)
    distributors.filter(distributor=>distributor.lat = Number(distributor.lat))
    distributors.filter(distributor=>distributor.lng = Number(distributor.lng))
    console.log('two',distributors)


    return (
        <div>
        <div>
      <LeafletMap
        center={[41.574465, -87.70884]}
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
        {distributors.map(distributor=><Marker position={[distributor.lat,distributor.lng]}><Popup>We Got The Booch!</Popup></Marker>)}
        <Marker position={[41.574465, -87.70884]}>    
          <Popup>
           Symone's house
          </Popup>
        </Marker>
      </LeafletMap>
      </div>
    <div>
      <aside>
{/* <div><a id = "map-link" target="_blank"></a>Hello</a></div> */}
<div class='panel' id='options-panel'>
    <div>
        <form onSubmit={this.handleSubmit}>
  <div>
  <div>
    <h2>Brands</h2>
    <select id='brand-options'  onChange={this.handleChange1}>
      <option value='1'>Kombucha 365</option>
      <option value='2'>WholeSome Booch</option>
      <option value='3'>Momma's Kombucha</option>
    </select>
  </div>
  <div>
    <h3>
      Flavor
    </h3>
    <select id='brand-flavor-options' onChange={this.handleChange2}>
        {this.props.company.kombuchas.map(kombucha=>{
            return(<option key={kombucha.id} value={kombucha.id}>{kombucha.flavor}</option>)
        })}
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
<button  type="sumbit" class='find-kombucha' id='find-me' >
  <p id = "status"></p>
  BoochMe!
</button>
</p>
</form>

</div>

</div>
</aside> 
</div>
</div>
    );
  }
}

const mapDispatch=(dispatch)=>({
    findInStock:(itemId)=>dispatch(findInStock(itemId)),
    getCompany:(companyId)=>dispatch(fetchCompany(companyId))
})

const mapState = (state)=>({
    company:state.company,
    kombuchas:state.kombuchas
})

export default connect(mapState,mapDispatch)(Map)





