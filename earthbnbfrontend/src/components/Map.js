
import React, { useState , useEffect} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import './Map.css'

const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map = ({ homes, getAllHomes }) => {
  const { searchValue } = useParams()
  let newLat 
  let newLng
  const [selectedHome, setSelectedHome] = useState(null)
  if(searchValue.toLowerCase() === 'miami beach') {
    newLat = homes[0].lat
      // 25.783912;
    newLng = homes[0].lng
      // -80.160915;
  }
  if (searchValue.toLowerCase() === 'new york') {
    newLat = homes[5].lat
    // 40.758896
    newLng = homes[5].lng
      // - 73.985130
  }
  return (
    ///html
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: newLat, lng: newLng }}
    >
      {homes.map((home) => {
        // if(home.city === searchValue) {
        return (
        <Marker
          key={home.id}
          position={{
            lat: home.lat,
            lng: home.lng
          }}
          
          onClick={() => {
            setSelectedHome(home)
          }}
        />
        )})}
      {selectedHome && (
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
            <img className='map__image'src={selectedHome.image} alt=""></img>
  
          <h2>{selectedHome.name}</h2>
          <p>$ {selectedHome.price}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  )
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GogleMap({searchValue}) {
  const homes = useSelector((state) => Object.values(state.homes))
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getAllHomes())
  }, [JSON.stringify(homes)])
  return (
    <div style={{ width: '50vw', height: '100vh' }}>
      <WrappedMap
        searchValue={searchValue}
        homes={homes}
        getAllHomes={() => dispatch(getAllHomes())}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

