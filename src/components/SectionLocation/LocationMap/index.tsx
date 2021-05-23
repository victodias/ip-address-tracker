import React, { useEffect, useState } from 'react'
import LeafLet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Address } from 'types'

type Props = {
  infoLocation: Address
}

const IconLocation = LeafLet.icon({
  iconUrl: '/img/icon-location.svg',
  iconSize: [30, 40]
})

const LocationMap = ({ infoLocation }: Props) => {
  const [keyMap, setKeyMap] = useState<number>(0)
  const { lat: latitude, lng: longitude } = infoLocation

  // this random 'keyMap' resolves, for now, the problem of
  // render image map when latitude/longitude are updated.
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
          <b>Local:</b> {infoLocation.city} - {infoLocation.region},{' '}
          {infoLocation.country} <br />
          <b>Latitude:</b> {latitude} <br />
          <b>Longitude:</b> {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LocationMap
