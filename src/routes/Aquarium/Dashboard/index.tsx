import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { PiSigmaThin } from 'react-icons/pi'
import { ExtractDataToStatistic } from '@/utils'
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { getAllSensorsValues } from '@/redux/reducers/graphSlice'
import {
  BiaxialGraph,
  CardinalChart,
  ComposedChartWithAxisLabels,
  InfoHeader,
  SimpleBarChart,
  StatisticDataCalcAndShow,
  TwoLinesChart,
} from '@/components'

export const AquariumDashboard = () => {
  const { isMobileOrTablet, isDesktop, isMobile } = useMedia()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dataGraph = useSelector(getAllSensorsValues)

  const { luminosidade, pH, temperatura, nivelAgua, saturacao } =
    ExtractDataToStatistic(dataGraph)

  return (
    <>
      <Flex
        h={isDesktop ? 'calc(100vh - 6.5rem)' : 'calc(100vh - 4.25rem)'}
        flexDir="column"
        alignItems="center"
        px={isMobileOrTablet ? '0.75rem' : 0}
        pt="1.5rem"
        overflowY="auto"
      >
        <Box
          maxW="37rem"
          w="full"
          h="fit-content"
          display="flex"
          justifyContent="center"
        >
          <InfoHeader heading="Dashboards" />
          <Icon
            as={PiSigmaThin}
            onClick={onOpen}
            color="blue.900"
            fontWeight={800}
            h={isMobileOrTablet ? '1.25rem' : '2rem'}
            w={isMobileOrTablet ? '1.25rem' : '2rem'}
            cursor="pointer"
            margin="auto 0 auto 1rem"
            title="Clique para ver informações estatísticas"
          />
        </Box>
        {dataGraph.length > 0 ? (
          <Flex w="100%" h="100%" wrap="wrap" justifyContent="center">
            <ComposedChartWithAxisLabels dataGraph={dataGraph} />

            {dataGraph[0].ph && dataGraph[0].temperatura && (
              <BiaxialGraph dataGraph={dataGraph} />
            )}

            {dataGraph[0].luminosidade && saturacao && (
              <CardinalChart dataGraph={dataGraph} />
            )}

            {dataGraph[0].ph && dataGraph[0].saturacao && (
              <TwoLinesChart dataGraph={dataGraph} />
            )}

            {dataGraph[0].nivel_agua && (
              <SimpleBarChart dataGraph={dataGraph} />
            )}
          </Flex>
        ) : (
          <Text color="blue.900" opacity="0.5" margin="auto auto">
            Não há sensores cadastrado para este aquário ou os dados ainda não
            estão disponíveis.
          </Text>
        )}
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="white"
          w={isMobile ? '22rem' : '45rem'}
          h="fit-content"
        >
          <ModalHeader color="blue.900" p="0.5rem" mb="-0.75rem">
            Estatística Descritiva
          </ModalHeader>
          <ModalBody p="0.5rem" overflow="auto" h="90%">
            {dataGraph.length < 4 ? (
              <Text p="1rem" color="blue.900">
                Necessário ao menos 4 registros para calcular a estatística
              </Text>
            ) : (
              <>
                {luminosidade.length > 4 && (
                  <StatisticDataCalcAndShow
                    title="Luminosidade"
                    dataGraph={luminosidade}
                  />
                )}
                {temperatura.length > 4 && (
                  <StatisticDataCalcAndShow
                    title="Temperatura"
                    dataGraph={temperatura}
                  />
                )}
                {saturacao.length > 4 && (
                  <StatisticDataCalcAndShow
                    title="Nível oxígenio"
                    dataGraph={saturacao}
                  />
                )}

                {pH.length > 4 && (
                  <StatisticDataCalcAndShow title="pH" dataGraph={pH} />
                )}

                {nivelAgua.length > 4 && (
                  <StatisticDataCalcAndShow
                    title="Nível água"
                    dataGraph={nivelAgua}
                  />
                )}
              </>
            )}
          </ModalBody>
          <ModalFooter p="0.5rem" mt="-0.75rem">
            <Button variant="ghost" color="red.400" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
