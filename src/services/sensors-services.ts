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
