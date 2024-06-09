import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { Box, Flex, Text } from '@chakra-ui/react'
import { getAllSensorsValues } from '@/redux/reducers/graphSlice'
import {
  BiaxialGraph,
  CardinalChart,
  ComposedChartWithAxisLabels,
  InfoHeader,
  SimpleBarChart,
  TwoLinesChart,
} from '@/components'

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
      {dataGraph.length > 0 ? (
        <Flex w="100%" h="100%" wrap="wrap" justifyContent="center">
          <ComposedChartWithAxisLabels dataGraph={dataGraph} />

          {dataGraph[0].ph && dataGraph[0].temperatura && (
            <BiaxialGraph dataGraph={dataGraph} />
          )}

          {dataGraph[0].luminosidade && dataGraph[0].nivel_oxigenio && (
            <CardinalChart dataGraph={dataGraph} />
          )}

          {dataGraph[0].ph && dataGraph[0].nivel_oxigenio && (
            <TwoLinesChart dataGraph={dataGraph} />
          )}

          {dataGraph[0].nivel_agua && <SimpleBarChart dataGraph={dataGraph} />}
        </Flex>
      ) : (
        <Text color="blue.900" opacity="0.5" margin="auto auto">
          Não há sensores cadastrado para este aquário ou os dados ainda não
          estão disponíveis.
        </Text>
      )}
    </Flex>
  )
}
