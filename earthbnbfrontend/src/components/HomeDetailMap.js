
import React, { useState, useEffect } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"


// const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map = ({ newLng, newLat }) => {

    return (
        ///html
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
    )
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GogleMap({ newLat, newLng }) {

    return (
        <div className="map__container">
            <WrappedMap
                newLat={newLat}
                newLng={newLng}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDTbCQcXDult2fDzYx4URy5YgS5H2sHbzc&callback=initMap`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
}



