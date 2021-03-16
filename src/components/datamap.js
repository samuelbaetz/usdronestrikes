import {React, useEffect} from 'react'
import {connect} from 'react-redux'
import { getStrikes } from '../store/actions/getStrikes'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
const StrikesMap = (props) => {
    useEffect(() => props.onGetData(), [])
    return (
        <MapContainer center={[14.79, 42.97]} zoom={4} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FtdWVsYmFldHoiLCJhIjoiY2toaTl6ZnUzMGdkeTJ4dDllYmZkY29heiJ9.mw2OBBR06AsO7clLwqDF4w"
  />
  {props.strikes.map(s => {
      return(
        <Marker key={s.id} position={[s.geo_lat, s.geo_lon]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup key={s.id}>
          Date:{s.date}
          <br></br>
          Village:{s.village}
          <br></br>
          Region:{s.region}
          <br></br>
          Country:{s.country}
        </Popup>
      </Marker>
      )
  })}
</MapContainer>
    )
}

const mapStateToProps = state => {
    return {
        strikes: state.strikes
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onGetData: () => dispatch(getStrikes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (StrikesMap)