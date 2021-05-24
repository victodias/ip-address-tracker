export type Location = {
  ip: string
  location: Address
  isp: string
}

export type Address = {
  region?: string
  country?: string
  city?: string
  lat: number
  lng: number
  postalCode?: string
  timezone?: string
}

export type LocationResponse = {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: 5375480
  }
  domains: string[]
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
  proxy: {
    proxy: boolean
    vpn: boolean
    tor: boolean
  }
}
