
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import './HomeDetailMap.css'


const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map = ({ newLng, newLat }) => {

    return (
        ///html
        <div className='home-detail-map__container'>
        <GoogleMap
            
            defaultZoom={16}
            defaultCenter={{ lat: newLat, lng: newLng }}
        >

            <Marker
                key={newLat}
                position={{
                    lat: newLat,
                    lng: newLng
                }}
            />
        </GoogleMap>
        </div>
    )
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GogleMap({ newLat, newLng }) {

    return (
        <div className='home-detail-map__container'>
            <WrappedMap
                newLat={newLat}
                newLng={newLng}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
}



