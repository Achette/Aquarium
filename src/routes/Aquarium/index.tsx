import React from 'react'
import { useMedia } from '@/hooks'
import { useDispatch } from 'react-redux'
import { BsSliders } from 'react-icons/bs'
import { AppDispatch } from '@/redux/store'
import { VscGraphLine } from 'react-icons/vsc'
import { HiOutlineHome } from 'react-icons/hi2'
import { Link, Outlet, useParams } from 'react-router-dom'
import { fetchAllSensors, resetSensors } from '@/redux/reducers/sensorsDetails'
import {
  Box,
  Flex,
  Icon,
  Link as LinkChakra,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  fetchAquariumDetails,
  resetAquarium,
} from '@/redux/reducers/aquariumDetails'
import { fetchPetsByAquariumId, resetPets } from '@/redux/reducers/petsDetails'
import {
  fetchAccessoriesAquarium,
  resetAccessories,
} from '@/redux/reducers/accessoriesDetails'
import {
  fetchDataForGraphs,
  resetSensorValues,
} from '@/redux/reducers/graphSlice'

export const AquariumDash = () => {
  const { id } = useParams()
  const { isMobileOrTablet } = useMedia()

  const dispatch = useDispatch<AppDispatch>()

  const fetchAquarium = React.useCallback(async () => {
    dispatch(fetchAquariumDetails(id!))
    dispatch(fetchPetsByAquariumId(id!))
    dispatch(fetchAccessoriesAquarium(id!))
    dispatch(fetchAllSensors(id!))
    dispatch(fetchDataForGraphs(id!))
  }, [dispatch, id])

  React.useEffect(() => {
    dispatch(resetPets())
    dispatch(resetAquarium())
    dispatch(resetAccessories())
    dispatch(resetSensors())
    dispatch(resetSensorValues())
    fetchAquarium()
  }, [dispatch, fetchAquarium])

  return (
    <Box w="full" h="auto">
      <Outlet />

      <Flex
        w="full"
        h={isMobileOrTablet ? '4.25rem' : '6.5rem'}
        borderTop="1px solid #0157A3"
        position="fixed"
        bottom="0"
        justifyContent="center"
        px={isMobileOrTablet ? '1rem' : '25%'}
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <LinkChakra
            as={Link}
            to={`/aquarium/${id}/dashboards`}
            _hover={{ textDecoration: 'none' }}
          >
            <VStack>
              <Icon
                as={VscGraphLine}
                w={isMobileOrTablet ? '2rem' : '2.5rem'}
                h={isMobileOrTablet ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Dashboards
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra
            as={Link}
            to={`/aquarium/${id}`}
            _hover={{ textDecoration: 'none' }}
          >
            <VStack>
              <Icon
                as={HiOutlineHome}
                w={isMobileOrTablet ? '2rem' : '2.5rem'}
                h={isMobileOrTablet ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Início
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra
            as={Link}
            to={`/aquarium/${id}/controls`}
            _hover={{ textDecoration: 'none' }}
          >
            <VStack>
              <Icon
                as={BsSliders}
                w={isMobileOrTablet ? '2rem' : '2.5rem'}
                h={isMobileOrTablet ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Controles
              </Text>
            </VStack>
          </LinkChakra>
        </Flex>
      </Flex>
    </Box>
  )
}
