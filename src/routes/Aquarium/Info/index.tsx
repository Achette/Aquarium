import { useMedia } from '@/hooks'
import { Box, VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { SensorDetails } from '@/components/SensorDetails'
import { AquariumDetailsTopBar, DetailsBox } from '@/components'
import { getAquariumDetails } from '@/redux/reducers/aquariumDetails'
import { getPetsByAquariumId } from '@/redux/reducers/petsDetails'
import { CleanAndFeedButtons } from '@/components/CleanFeedButtons'
import React from 'react'

export const AquariumInfo = () => {
  const { isDesktop } = useMedia()
  const [cleanDate, setCleanDate] = React.useState('Sem registro')
  const [feedDate, setFeedDate] = React.useState('Sem registro')

  const handleAddCleanDate = (date: string) => {
    setCleanDate(date)
  }

  const handleAddFeedDate = (date: string) => {
    setFeedDate(date)
  }

  const details = useSelector(getAquariumDetails)
  const pets = useSelector(getPetsByAquariumId)

  return (
    <VStack
      pt="1.5rem"
      px={isDesktop ? '16%' : '0.5rem'}
      h={isDesktop ? 'calc(100vh - 6.5rem)' : 'calc(100vh - 4.25rem)'}
      justifyContent="space-between"
    >
      <Box>
        <AquariumDetailsTopBar />
        <DetailsBox
          material={details.material}
          powerSupply={details.voltage}
          thickness={details.thickness}
          height={details.height}
          volume={details.volume}
          pets={pets}
        />
        <SensorDetails cleanDate={cleanDate} feedDate={feedDate} />
      </Box>

      <CleanAndFeedButtons
        getCleanDate={handleAddCleanDate}
        getFeedDate={handleAddFeedDate}
      />
    </VStack>
  )
}
