import React from 'react';
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

function GoogleMapApi() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker
    position={center}
    // Other props as needed
  />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapApi;
