import React, { useContext, useState, createContext, useEffect } from 'react'
import { Location } from 'types'

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
    location: {
      lat: -23.5944572,
      lng: -46.6851322
    }
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setAddress({
          location: {
            lat: latitude,
            lng: longitude
          }
        })
      },
      (error) => {
        alert(error.message)
      },
      { enableHighAccuracy: true }
    )
  }, [])

  return (
    <LocationContext.Provider value={{ address, setAddress }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
