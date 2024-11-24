import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import smily from "../images/Smiling-Face.png"


function LocationMe() {
    const position = [30.7650759, 76.5160501];

    const customIcon = new L.DivIcon({
        // iconUrl: smily,  // Custom image URL
        // // html: '<div style="background-color: blue; color: white; padding: 5px;"></div>',
        // iconSize: [32, 32],  // Size of the marker icon
        // iconAnchor: [16, 32],  // Point of the icon that will be located at the marker position


        className: 'icon-style',  // CSS class for styling the div icon
        html: `<div > <img src=${smily}> </div>`,
        iconSize: [65, 65],  // Set size of the div icon
        iconAnchor: [35, 40],  // Anchor at the center
    });
    return <div className=" bg-[#2B2929] overflow-hidden rounded-[15px] max-lgr:min-h-[200px] max-md:h-[200px]">
        <MapContainer
            center={position}
            zoom={7.2}
            style={{ width: '100%', height: '100%' }}
            zoomControl={false}
            dragging={false}
        >
            <TileLayer
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            // url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
            />
            <Marker position={position} icon={customIcon}>
            </Marker>
        </MapContainer>
    </div>
}

export default LocationMe;