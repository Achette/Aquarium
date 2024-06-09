import { getAccessToken } from '@/hooks'
import { BASE_URL } from '@/constants/system'
import axios, { AxiosRequestConfig } from 'axios'

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = {
    authorization: getAccessToken(),
  }

  return axios({
    ...config,
    baseURL: BASE_URL,
    headers,
    signal: AbortSignal.timeout(5000),
  })
}
