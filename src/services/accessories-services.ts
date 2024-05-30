import axios from './axios'
import { getAquariumId } from '@/hooks'

type newAccessoriesProps = {
  name: string
}

const aquariumId = getAquariumId()

export const addAcesories = async (data: newAccessoriesProps) => {
  // const config: AxiosRequestConfig = {
  //   method: 'POST',
  //   url: `/aquarium/${aquariumId}/acessories`,
  //   data,
  //   signal: AbortSignal.timeout(5000),
  // }

  const response = await axios.post(`/aquarium/${aquariumId}/accessories`, data)
  return response
}
