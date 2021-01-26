
import React, { useState , useEffect} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import './Map.css'


const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map = ({ homes, getAllHomes, searchValue }) => {
  
  let newLat 
  let newLng
  const [selectedHome, setSelectedHome] = useState(null)
  // const [panelsData, changePanel] = useState('');
  

  // useEffect(() => {
  //   changePanel(searchValue);
  // }, [searchValue]);

  // useEffect(() => {
  //   getAllHomes()
  // }, [])



if(searchValue) {
  
  if(searchValue.toLowerCase() === 'miami') {
    newLat = homes[0].lat
      // 25.783912;
    newLng = homes[0].lng
      // -80.160915;
  }
  if (searchValue.toLowerCase() === 'new york') {
    newLat = homes[8].lat
    // 40.758896
    newLng = homes[8].lng
      // - 73.985130
  }
  if (searchValue.toLowerCase() === 'san francisco') {
    newLat = homes[26].lat
    // 25.783912;
    newLng = homes[26].lng
    // -80.160915;
  }
  if (searchValue.toLowerCase() === 'los angeles') {
    newLat = homes[20].lat
    // 25.783912;
    newLng = homes[20].lng
    // -80.160915;
  }
  if (searchValue.toLowerCase() === 'austin') {
    newLat = homes[14].lat
    // 25.783912;
    newLng = homes[14].lng
    // -80.160915;
  }
}

  return (
    ///html
    <GoogleMap
      defaultZoom={13.5}
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
          arrowStyle="2"
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
  return (
    <div className="map_width"style={{ width: '50vw', height: '100vh' }}>
      <WrappedMap
        homes={homes}
        getAllHomes={() => dispatch(getAllHomes())}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        searchValue={searchValue}
      />
    </div>
  )
}

