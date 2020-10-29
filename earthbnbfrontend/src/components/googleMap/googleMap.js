
import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import { getAllHomes } from "../../store/actions/homes"
import { useSelector, useDispatch } from 'react-redux';
// home


const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map =({homes, getAllHomes}) => {
  const [selectedHome, setSelectedHome] = useState(null)
  return(
///html
 <GoogleMap
  defaultZoom={10}
  defaultCenter = {{ lat: 25.783912, lng: -80.160915}}
  >
    {homes.map(home => (
      <Marker
        key={home.id}
        position= {{
          lat:home.lat,
          lng: home.lng
        }}
        onClick={() => {
          setSelectedHome(home)
        }}
        />
    ))}
    {/* {selectedHome && (
      <InfoWindow
        position={{
          lat:selectedHome.lat,
          lng:selectedHome.lng
        }}
        onCloseClick={() => {
          setSelectedHome(null)
        }}
      >
        <div>
          <h2>{selectedHome.name}</h2>
          <p>{selectedHome.description}</p>
        </div>
      </InfoWindow>
    )} */}
  </GoogleMap>
)
 }


 const WrappedMap = withScriptjs(withGoogleMap(Map));

 export default function GoggleMap() {
   const homes = useSelector((state) => Object.values(state.homes))
   const dispatch = useDispatch()

   return (
     <div style={{width: '50vw', height:'50vh'}}>
       <WrappedMap
         homes={homes}
         getAllHomes={() => dispatch(getAllHomes())}
         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`}
        loadingElement={<div style={{height:'50%'}}/>}
        containerElement={<div style={{height:'50%'}}/>}
        mapElement={<div style={{ height: '50%' }} />}
       />
     </div>
   )
 }
