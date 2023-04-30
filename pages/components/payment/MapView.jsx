import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { Popup } from "react-leaflet";
import { useSelector } from "react-redux";

const MapView = () => {
  const { quotation } = useSelector((state) => state.quote);

  const markers = [
    {
      geocode: [6.118787978627771, -75.43828255630484],
      popUp: quotation.artist.name,
    },
  ];

  const costumIcon = L.icon({
    iconUrl: require("/node_modules/leaflet/dist/images/marker-icon.png"),
    iconRetinaUrl: require("/node_modules/leaflet/dist/images/marker-icon-2x.png"),
    shadowUrl: require("/node_modules/leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[6.116743065946255, -75.44036838009255]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={costumIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
