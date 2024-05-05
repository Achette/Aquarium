import { BASE_URL } from '@/constants/system'
import { AquariumProps } from '@/models'
import axios from 'axios'

export const AquariumServices = {
  create: async (data: Omit<AquariumProps, 'id'>): Promise<AquariumProps> => {
    const response = await axios.post(`${BASE_URL}/aquarium`, data)
    return response.data
  },

  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/aquarium`)
    return response.data
  },

  getById: async (id: string) => {
    const response = await axios.get(`${BASE_URL}/aquarium/${id}`)
    return response.data
  },

  // Accessories
  newAccessories: async (data) => {
    const response = await axios.post(`${BASE_URL}/accessories`, data)
    return response.data
  },

  // Sensors
  newSensors: async (data) => {
    const response = await axios.post(`${BASE_URL}/sensors`, data)
    return response.data
  },

  // Pets
  newPets: async (data) => {
    const response = await axios.post(`${BASE_URL}/pets`, data)
    return response.data
  },
}
