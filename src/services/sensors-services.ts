import axios from './axios'
import { getAquariumId } from '@/hooks'

type NewSensorsProps = {
  name: string
}

const aquariumId = getAquariumId()

export const addSensors = async (data: NewSensorsProps) => {
  const response = await axios.post(`/aquarium/${aquariumId}/sensors`, data)
  return response
}