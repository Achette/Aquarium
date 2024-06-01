import axios from './axios'
import { getAquariumId } from '@/hooks'

type NewPetsProps = {
  species: string
  quantity: number
}

const aquariumId = getAquariumId()

export const addPets = async (data: NewPetsProps) => {
  const response = await axios.post(`/aquarium/${aquariumId}/pets`, data)
  return response
}

export const getAllPets = async(id: string) => {
  const response = await axios.get(`/aquarium/${id}/pets` )
  return response.data
}