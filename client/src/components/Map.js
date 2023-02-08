import React from "react";
import { MapContainer, TileLayer, Marker, Popur } from "react-leaflet";

function Map(props) {
  return (
    <div className="row">
      <MapContainer
        id="map"
        center={[47, 2.2137]}
        zoom={6}
        scrollWheelZoom={false}
        // style={{ height: "800px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
