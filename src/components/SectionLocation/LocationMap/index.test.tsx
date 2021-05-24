import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import LocationMap from './'

describe('<LocationMap />', () => {
  const initialData = {
    region: 'São Paulo',
    country: 'BR',
    city: 'Barueri',
    lat: -23.5944572,
    lng: -46.6851322,
    postalCode: '10001',
    timezone: '-03:00'
  }

  it('should render the component correctly', () => {
    const component = render(<LocationMap infoLocation={initialData} />)

    expect(component.container).toBeInTheDocument()
  })

  it('should render popup informations correctly', async () => {
    const component = render(<LocationMap infoLocation={initialData} />)

    const pinMarker = component.getByRole('img')
    const region = /São Paulo/
    const country = /BR/
    const city = /Barueri/
    const latitude = /-23.5944572/
    const longitude = /-46.6851322/

    await waitFor(() => fireEvent.click(pinMarker))

    expect(component.getByText(latitude)).toBeInTheDocument()
  })
})
