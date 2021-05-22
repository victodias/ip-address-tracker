import React from 'react'
import { Wrapper, InfoItem, InfoLabel, InfoDescription } from './styles'
import { Location } from 'types'

type Props = {
  infos: Location
}

const LocationInfo = ({ infos }: Props) => {
  const { city, region, postalCode, timezone } = infos.location

  return (
    <Wrapper>
      <InfoItem>
        <InfoLabel>Ip address</InfoLabel>
        <InfoDescription>{infos.ip ? infos.ip : '-'}</InfoDescription>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Location</InfoLabel>
        <InfoDescription>
          {region ? `${city}, ${region} ${postalCode}` : '-'}
        </InfoDescription>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Timezone</InfoLabel>
        <InfoDescription>{timezone ? timezone : '-'}</InfoDescription>
      </InfoItem>
      <InfoItem>
        <InfoLabel>ISP</InfoLabel>
        <InfoDescription>{infos.isp ? infos.isp : '-'}</InfoDescription>
      </InfoItem>
    </Wrapper>
  )
}

export default LocationInfo
