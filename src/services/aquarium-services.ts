import axios from './axios'
import { AquariumProps } from '@/models'

export const createAquarium = async (data: Omit<AquariumProps, 'id'>) => {
  const response = await axios.post(`/aquarium`, data)
  return response.data
}

export const getAllAquariums = async () => {
  const response = await axios.get('/aquarium')
  return response.data
}

export const AquariumServices = {
  create: async (data: Omit<AquariumProps, 'id'>): Promise<AquariumProps> => {
    const response = await axios.post(`/aquarium`, data)
    return response.data
  },
}
