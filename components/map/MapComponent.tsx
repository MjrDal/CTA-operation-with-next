"use client";

// components/MapComponent.js
import L, { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const myIcon = L.icon({
  iconUrl: "/images/flag.png",
  iconSize: [38, 38],
  iconAnchor: [22, 37],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

interface MarkerData {
  position: LatLngExpression;
  popupText: string;
  icon: L.Icon;
}

const markers: MarkerData[] = [
  { position: [46.683805, 5.508236], popupText: "Marker 1", icon: myIcon },
  { position: [46.52391, 5.610176], popupText: "Marker 2", icon: myIcon },
  { position: [46.58102, 5.746621], popupText: "Marker 3", icon: myIcon },
  // Add more markers as needed
];

const MapComponent = () => {
  return (
    <MapContainer
      className="w-full h-[450px] mt-8 z-0 border rounded-sm"
      center={[46.683805, 5.508236]}
      zoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={marker.icon}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
