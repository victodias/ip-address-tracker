import React from 'react'
import { Wrapper, InfoItem, InfoLabel, InfoDescription } from './styles'
import Loading from 'components/Loading'
import { Location } from 'types'

type Props = {
  infos: Location
  isLoading: boolean
}

const LocationInfo = ({ infos, isLoading }: Props) => {
  const { city, region, postalCode, timezone } = infos.location

  return (
    <Wrapper>
      {isLoading ? (
        <Loading imageUrl="/img/spinner-black.gif" height={80} width={80} />
      ) : (
        <>
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
        </>
      )}
    </Wrapper>
  )
}

export default LocationInfo
