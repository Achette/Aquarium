import { AquariumProps } from '@/models'
import axios, { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'
import { BASE_URL } from '@/constants/system'

export const createAquarium = async (data: Omit<AquariumProps , 'id'>) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/aquarium',
    data,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

 export const AquariumServices = {
  create: async (data: Omit<AquariumProps, 'id'>): Promise<AquariumProps> => {
    const response = await axios.post(`${BASE_URL}/aquarium`, data)
    return response.data
  },

  // all aquariums
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

  getPetsByAquariumId: async (id: string) => {
    const response = await axios.get(`${BASE_URL}/pets/${id}`)
    return response.data
  },
} 
