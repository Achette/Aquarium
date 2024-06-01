import axios from './axios'
import { getAquariumId } from '@/hooks'

type NewAccessoriesProps = {
  name: string
}

const aquariumId = getAquariumId()

export const addAccesories = async (data: NewAccessoriesProps) => {
  const response = await axios.post(`/aquarium/${aquariumId}/accessories`, data)
  return response
}
