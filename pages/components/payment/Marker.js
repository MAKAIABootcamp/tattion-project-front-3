import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = () => {
  return <Marker position={[51.505, -0.09]} icon={IconLocation} />;
};

export default Markers;
