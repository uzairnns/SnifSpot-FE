import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center = { lat: 47.608013, lng: -122.335167 }, zoom = 6 }) => {
  const bootstrapURLKeys = { key: process.env.REACT_APP_GOOGLE_MAP_URL_KEYS };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={bootstrapURLKeys}
        center={center}
        zoom={zoom}
        options={{ disableDefaultUI: true }}
        marker={{ lat: center.lat, lng: center.lng }}
      />
    </div>
  );
};

export default Map;
