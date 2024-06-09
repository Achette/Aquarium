import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

type NewAccessoriesProps = {
  name: string
}

export const addAccesories = async (id: string, data: NewAccessoriesProps) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${id}/accessories`,
    data,
  }

  return requestBackend(config)
}

export const getAllAccessories = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/accessories`,
  }

  return requestBackend(config)
}
