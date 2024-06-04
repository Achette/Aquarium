import { AxiosRequestConfig } from 'axios'
import { getAquariumId } from '@/hooks'
import { requestBackend } from './request'

type NewAccessoriesProps = {
  name: string
}

export const addAccesories = async (data: NewAccessoriesProps) => {
  const aquariumId = getAquariumId()
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${aquariumId}/accessories`,
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
