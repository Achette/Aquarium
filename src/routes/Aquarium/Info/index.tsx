import React from 'react'
import { useMedia } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { AquariumProps } from '@/models'
import { useParams } from 'react-router-dom'
import { AquariumServices } from '@/services/aquarium-services'
import { AquariumDetailsTopBar, DetailsBox } from '@/components'

export const AquariumInfo = () => {
  const [aquariumData, setAquariumData] = React.useState<AquariumProps>()

  const { id } = useParams()
  const { isDesktop } = useMedia()

  const fetchAquarium = React.useCallback(async () => {
    const response = await AquariumServices.getById(id!)
    setAquariumData({ ...response })
  }, [id])

  React.useEffect(() => {
    fetchAquarium()
  }, [fetchAquarium])

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar
        format={aquariumData?.format}
        name={aquariumData?.name}
      />
      <DetailsBox />
    </Box>
  )
}
