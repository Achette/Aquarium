import { AxiosRequestConfig } from 'axios'
import { AquariumProps } from '@/models'
import { requestBackend } from './request'

export const createAquarium = async (data: Omit<AquariumProps, 'id'>) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium`,
    data,
  }

  return requestBackend(config)
}

export const getAllAquariums = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/aquarium',
  }

  return requestBackend(config)
}

export const getAquariumById = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}`,
  }

  return requestBackend(config)
}

export const deleteAquariumById = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/aquarium/${id}`,
  }

  return requestBackend(config)
}
