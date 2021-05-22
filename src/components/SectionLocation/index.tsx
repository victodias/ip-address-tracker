import React from 'react'
import { Wrapper } from './styles'
import LocationInfo from './LocationInfo'
import LocationMap from './LocationMap'
import { useLocation } from 'context/Location'

const Location = () => {
  const { address } = useLocation()

  return (
    <Wrapper>
      <LocationInfo infos={address} />
      <LocationMap
        latitude={address.location.lat}
        longitude={address.location.lng}
      />
    </Wrapper>
  )
}

export default Location
