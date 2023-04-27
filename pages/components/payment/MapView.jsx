import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { Popup } from "react-leaflet";

const MapView = () => {
  const markers = [
    {
      geocode: [6.118787978627771, -75.43828255630484],
      popUp: "Antony",
    },
    {
      geocode: [6.118649709183368, -75.4399358447627],
      popUp: "Chuck Norris",
    },
    {
      geocode: [6.1176587771184385, -75.4423307953325],
      popUp: "Lisa",
    },
  ];

  const costumIcon = new Icon({
    iconUrl: require("/public/payment/ubicacion.png"),
    iconSize: [25, 41],
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
