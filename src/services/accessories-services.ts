import axios from './axios'
import { getAquariumId } from '@/hooks'

type NewAccessoriesProps = {
  name: string
}


export const addAccesories = async (data: NewAccessoriesProps) => {
  const aquariumId = getAquariumId()
  const response = await axios.post(`/aquarium/${aquariumId}/accessories`, data)
  return response
}
