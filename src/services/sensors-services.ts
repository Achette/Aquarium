import axios from './axios'
import { getAquariumId } from '@/hooks'

type NewSensorsProps = {
  name: string
}


export const addSensors = async (data: NewSensorsProps) => {
  const aquariumId = getAquariumId()
  const response = await axios.post(`/aquarium/${aquariumId}/sensors`, data)
  return response
}