import React, { useEffect, useState } from 'react'
import LeafLet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Props = {
  latitude: number
  longitude: number
}

const IconLocation = LeafLet.icon({
  iconUrl: '/img/icon-location.svg',
  iconSize: [30, 40]
})

const LocationMap = ({ latitude, longitude }: Props) => {
  const [keyMap, setKeyMap] = useState<number>(0)

  useEffect(() => {
    setKeyMap(Math.random())
  }, [latitude, longitude])

  return (
    <MapContainer
      key={keyMap}
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={IconLocation}>
        <Popup>
          <b>Latitude:</b> {latitude} <br />
          <b>Longitude:</b> {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LocationMap
