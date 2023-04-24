import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("/public/appointment/marker.svg"),
  iconRetinaUrl: require("/public/appointment/marker.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
