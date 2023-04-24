import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "./Marker";

const MapView = ({ data }) => {
  const [state, setState] = useState({
    currentLocation: [51.505, -0.09],
  });
  console.log(state.currentLocation);

  useEffect(() => {
    if (data.lat && data.lng) {
      const currentLocation = [data.lat, data.lng];
      setState(currentLocation);
    }
  }, []);

  return (
    <MapContainer
      center={state.currentLocation}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker />
    </MapContainer>
  );
};

export default MapView;
