import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'
import { getCurrentAndPreviousDate } from '@/utils'

type NewSensorsProps = {
  name: string
}

export const addSensors = async (id: string, data: NewSensorsProps) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${id}/sensors`,
    data,
  }

  return requestBackend(config)
}

export const getAllSensor = async (id: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/sensors`,
  }

  return requestBackend(config)
}

export const getAllOldSensor = async (id: string) => {
  const {currentDate, previousDate} = getCurrentAndPreviousDate()
  
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/aquarium/${id}/chart?created_at=${previousDate},${currentDate}`,
  }

  return requestBackend(config)
}
