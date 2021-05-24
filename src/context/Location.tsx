import React, { useContext, useState, createContext, useEffect } from 'react'
import { Location } from 'types'
import { getIpAddress } from 'api'

type LocationContextProps = {
  address: Location
  setAddress: React.Dispatch<React.SetStateAction<Location>>
  loadingLocation: boolean
}

export const LocationContext = createContext<LocationContextProps>(
  {} as LocationContextProps
)

type Props = {
  children: React.ReactNode
}

export const LocationProvider = ({ children }: Props) => {
  const [address, setAddress] = useState<Location>({
    ip: '',
    location: {
      region: '',
      country: '',
      city: '',
      lat: -23.5945378,
      lng: -46.6816103,
      postalCode: '',
      timezone: ''
    },
    isp: ''
  })
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false)

  useEffect(() => {
    const fetch = async () => {
      setLoadingLocation(true)

      await getIpAddress().then((response) => {
        setLoadingLocation(false)

        return setAddress({
          ip: response.data.ip,
          location: response.data.location,
          isp: response.data.isp
        })
      })
    }
    fetch().catch((error) => error.message)
  }, [])

  return (
    <LocationContext.Provider value={{ address, setAddress, loadingLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
