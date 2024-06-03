import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './map.scss'

const Map = () => {
    return (
        <MapContainer center={[52.4797, -1.902691]} zoom={13} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.4797, -1.902691]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map