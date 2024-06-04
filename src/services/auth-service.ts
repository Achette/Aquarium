import axios from 'axios'
import { BASE_URL } from '@/constants/system'
import { NewUserProps, UserProps } from '@/models'

export const UserService = {
  create: async (data: NewUserProps) => {
    const response = await axios.post(`${BASE_URL}/register`, data)
    return response.data
  },

  login: async (data: UserProps) => {
    const response = await axios.post(`${BASE_URL}/login`, data)
    return response.data
  },
}
