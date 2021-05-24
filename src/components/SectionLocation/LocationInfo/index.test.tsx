import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { LocationProvider } from 'context/Location'
import LocationInfo from './'

describe('<LocationInfo />', () => {
  const initialData = {
    ip: '',
    location: {
      region: 'São Paulo',
      country: 'BR',
      city: 'Barueri',
      lat: 0,
      lng: 0,
      postalCode: '10001',
      timezone: '-03:00'
    },
    isp: ''
  }

  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
  }

  //@ts-ignore
  navigator.geolocation = mockGeolocation

  const WrapperComponent = ({ children }: { children: React.ReactNode }) => (
    <LocationProvider>{children}</LocationProvider>
  )

  it('should render the component correctly', () => {
    const component = render(
      <WrapperComponent>
        <LocationInfo infos={initialData} />
      </WrapperComponent>
    )

    expect(component.container).toBeInTheDocument()
  })

  it('should render location infos correctly', () => {
    const component = render(
      <WrapperComponent>
        <LocationInfo infos={initialData} />
      </WrapperComponent>
    )

    const city = /Barueri/i
    const region = /São Paulo/
    const postalCode = /10001/
    const timezone = /-03:00/

    expect(component.getByText(city)).toBeInTheDocument()
    expect(component.getByText(region)).toBeInTheDocument()
    expect(component.getByText(postalCode)).toBeInTheDocument()
    expect(component.getByText(timezone)).toBeInTheDocument()
  })

  it('should display empty char if not have the information', () => {
    const infoData = {
      ...initialData,
      location: {
        city: '',
        region: '',
        lat: -23.5944572,
        lng: -46.6851322,
        postalCode: '',
        timezone: ''
      }
    }

    const component = render(
      <WrapperComponent>
        <LocationInfo infos={infoData} />
      </WrapperComponent>
    )

    const emptyChar = component.getAllByText('-')

    expect(emptyChar).toHaveLength(4)
  })

  it('should not display different informations of expected by request', () => {
    const component = render(
      <WrapperComponent>
        <LocationInfo infos={initialData} />
      </WrapperComponent>
    )

    const city = /Belo Horizonte/i
    const region = /Minas Gerais/
    const postalCode = /10002/
    const timezone = /-04:00/

    expect(component.queryByText(city)).not.toBeInTheDocument()
    expect(component.queryByText(region)).not.toBeInTheDocument()
    expect(component.queryByText(postalCode)).not.toBeInTheDocument()
    expect(component.queryByText(timezone)).not.toBeInTheDocument()
  })
})
