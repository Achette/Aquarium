import { BASE_URL } from '@/constants/system'
import { NewUserProps } from '@/routes/Access/Register'
import axios from 'axios'

export const UserService = {
  create: async (data: NewUserProps) => {
    const response = await axios.post(`${BASE_URL}/users`, data)
    return response.data
  },

  
}
