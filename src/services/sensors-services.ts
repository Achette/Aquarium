import { getAquariumId } from '@/hooks'
import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

type NewSensorsProps = {
  name: string
}

export const addSensors = async (data: NewSensorsProps) => {
  const aquariumId = getAquariumId()
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${aquariumId}/sensors`,
    data,
  }

  return requestBackend(config)
}

export const getAllSensor = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/sensors`,
  }

  return requestBackend(config)
}

export const getAllOldSensor = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/chart?created_at=2024-06-03,2024-06-08`,
  }

  return requestBackend(config)
}
