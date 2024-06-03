import { AxiosRequestConfig } from 'axios'
import axios from './axios'
import { AquariumProps } from '@/models'
import { requestBackend } from './request'

export const createAquarium = async (data: Omit<AquariumProps, 'id'>) => {
  const response = await axios.post(`/aquarium`, data)
  return response.data
}

export const getAllAquariums = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/aquarium',
  }

  return requestBackend(config)
}

export const getAquariumById = async (id: string) => {
  const response = await axios.get(`/aquarium/${id}`)
  return response.data
}
