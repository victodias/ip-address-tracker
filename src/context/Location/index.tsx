import React, { useContext, useState, createContext, useEffect } from 'react'
import { Location } from 'types'
import { getIpAddress } from 'api'

type LocationContextProps = {
  address: Location
  setAddress: React.Dispatch<React.SetStateAction<Location>>
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
      lat: 0,
      lng: 0,
      postalCode: '',
      timezone: ''
    },
    isp: ''
  })

  useEffect(() => {
    const fetch = async () => {
      await getIpAddress().then((response) => {
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
    <LocationContext.Provider value={{ address, setAddress }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
