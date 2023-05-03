import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
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

    const icon = new Icon({
        iconUrl: "/skateboarding.svg",
        iconSize: [20, 20],
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
            {markers.map((marker, i) => (
                <Marker key={i} position={marker.geocode} icon={icon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
