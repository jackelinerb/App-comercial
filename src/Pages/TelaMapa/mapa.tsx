import "leaflet/dist/leaflet.css";

import React, { FormEvent, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import { fetchLocalMapBox } from "./apiMapBox";

import mapPackage from "./package.svg";
import mapPin from "./pin.svg";
import "./App.css";

const initialPosition = { lat: -23.5838639, lng: -46.7572651 };

const mapPackageIcon = Leaflet.icon({
    iconUrl: mapPackage,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

interface Delivery {
    id: string;
    name: string;
    address: string;
    complement: string;
    date: string | null;
    latitude: number;
    longitude: number;
}

type Position = {
    longitude: number;
    latitude: number;
};

function Mapt() {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);
    const [position, setPosition] = useState<Position | null>(null);


    const [location, setLocation] = useState(initialPosition);

    return (
        <div id="page-map">
            <MapContainer
                center={location}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                />

                {position && (
                    <Marker
                        icon={mapPinIcon}
                        position={[position.latitude, position.longitude]}
                    ></Marker>
                )}

                {deliveries.map((delivery) => (
                    <Marker
                        key={delivery.id}
                        icon={mapPackageIcon}
                        position={[delivery.latitude, delivery.longitude]}
                    ></Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Mapt;
