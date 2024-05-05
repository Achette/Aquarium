import { BASE_URL } from '@/constants/system'
import { AquariumProps } from '@/models'
import axios from 'axios'

export const AquariumServices = {
  create: async (data: Omit<AquariumProps, 'id'>) => {
    const response = await axios.post(`${BASE_URL}/aquarium`, data)
    return response.data
  },

  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/aquarium`)
    return response.data
  },
}
