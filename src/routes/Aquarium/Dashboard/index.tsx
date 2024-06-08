import { useMedia } from '@/hooks'
import { InfoHeader } from '@/components'
import { useSelector } from 'react-redux'
import { Box, Flex } from '@chakra-ui/react'
import { BiaxialGraph } from '@/components/Graph/BiaxialChart'
import { getAllSensorsValues } from '@/redux/reducers/graphSlice'
import ComposedChartWithAxisLabels from '@/components/Graph/Chart1'

export const AquariumDashboard = () => {
  const { isMobileOrTablet, isDesktop } = useMedia()

  const dataGraph = useSelector(getAllSensorsValues)

  return (
    <Flex
      h={isDesktop ? 'calc(100vh - 6.5rem)' : 'calc(100vh - 4.25rem)'}
      flexDir="column"
      alignItems="center"
      px={isMobileOrTablet ? '0.75rem' : 0}
      pt="1.5rem"
      overflowY="auto"
    >
      <Box maxW="37rem" w="full">
        <InfoHeader heading="Dashboards" />
      </Box>
      <Flex w="100%" h="100%" wrap="wrap" justifyContent="center">
        <ComposedChartWithAxisLabels dataGraph={dataGraph} />
        <BiaxialGraph />
      </Flex>
    </Flex>
  )
}
