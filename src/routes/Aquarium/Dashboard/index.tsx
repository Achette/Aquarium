import { InfoHeader } from '@/components'
import ComposedChartWithAxisLabels from '@/components/Graph/Chart1'
import { useMedia } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'

export const AquariumDashboard = () => {
  const { isMobileOrTablet } = useMedia()
  return (
    <Flex
      h="75vh"
      flexDir="column"
      alignItems="center"
      px={isMobileOrTablet ? '0.75rem' : 0}
      pt="1.5rem"
    >
      <Box maxW="37rem"  w="full">
        <InfoHeader heading="Dashboards" />
      </Box>
      <ComposedChartWithAxisLabels />
    </Flex>
  )
}
