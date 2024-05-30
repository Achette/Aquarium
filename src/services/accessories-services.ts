import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'
import { getAquariumId } from '@/hooks'

type newAccessoriesProps = {
  
  name: string
}

const aquariumId = getAquariumId()

export const addAcesories = async (data: newAccessoriesProps) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `/aquarium/${aquariumId}/acessories`,
    data,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}
