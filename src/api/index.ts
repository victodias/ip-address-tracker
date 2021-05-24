import axios from 'axios'
import { LocationResponse } from 'types'

const instance = axios.create({
  baseURL: process.env.REACT_APP_IPIFY_URL
})

const apiKey = process.env.REACT_APP_IPIFY_KEY

export const getIpAddress = (ipAddress?: string) =>
  instance.get<LocationResponse>(`/api/v1`, { params: { apiKey, ipAddress } })
