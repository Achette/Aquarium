import { requestBackend } from './request'
import { AxiosRequestConfig } from 'axios'

type NewPetsProps = {
  species: string
  quantity: number
}

export const addPets = async (id: string, data: NewPetsProps) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${id}/pets`,
    data,
  }

  return requestBackend(config)
}

export const getAllPets = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/pets`,
  }

  return requestBackend(config)
}
