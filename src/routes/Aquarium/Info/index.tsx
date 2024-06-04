import { useMedia } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { SensorDetails } from '@/components/SensorDetails'
import { AquariumDetailsTopBar, DetailsBox } from '@/components'
import { getAquariumDetails } from '@/redux/reducers/aquariumDetails'
import { getPetsByAquariumId } from '@/redux/reducers/petsDetails'

export const AquariumInfo = () => {
  const { isDesktop } = useMedia()

  const details = useSelector(getAquariumDetails)
  const pets = useSelector(getPetsByAquariumId)

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar />
      <DetailsBox
        material={details.material}
        powerSupply={details.voltage}
        thickness={details.thickness}
        height={details.height}
        volume={details.volume}
        pets={pets}
      />
      <SensorDetails />
    </Box>
  )
}
