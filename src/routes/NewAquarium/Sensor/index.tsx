import React from 'react'
import { useMedia } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { addSensors } from '@/services/sensors-services'
import { BackButton, ContinueButton } from '@/components'
import { aquariumSensors } from '@/assets/helpers/sensors'
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { getAquariumId } from '@/redux/reducers/aquariumIdSlice'

export const AquariumSensor = () => {
  const { isDesktop, isMobile, isMobileOrTablet } = useMedia()
  const navigate = useNavigate()
  const toast = useToast()
  const { id } = useSelector(getAquariumId)

  const [sensors, setSensors] = React.useState(aquariumSensors)

  const handleSelectSensors = (index: number) => {
    setSensors((prevSensors) => {
      const selectedSensors = [...prevSensors]

      selectedSensors[index] = {
        ...selectedSensors[index],
        selected: !selectedSensors[index].selected,
      }

      return selectedSensors
    })
  }

  const handleSubmit = React.useCallback(async () => {
    const selectedSensors = sensors
      .filter((sensor) => sensor.selected)
      .map((sensor) => sensor.name)

    const data = [...selectedSensors]

    try {
      if (data.length) {
        await Promise.all(
          data.map(async (sensor) => {
            await addSensors(id, { name: sensor })
            toast({
              description: `${sensor} adicionado ao aquário`,
              containerStyle: { color: 'white' },
              position: isMobileOrTablet ? 'bottom' : 'bottom-right',
              isClosable: true,
              duration: 2000,
            })
          })
        )
      }
      navigate('/new-aquarium/pets')
    } catch (e) {
      toast({
        description: 'Não foi possível adicionar os sensores ao aquário',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }, [id, isMobileOrTablet, navigate, sensors, toast])

  return (
    <Box px={isDesktop ? '16%' : '.25rem'} mt="1.5rem">
      <Heading
        as="h2"
        color="blue.900"
        fontSize="1.75rem"
        textAlign={isDesktop ? 'center' : 'start'}
        mb="3rem"
      >
        Sensores
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" gap=".75rem">
        {sensors.map((sensor, index) => (
          <VStack
            key={sensor.id}
            w="6.75rem"
            h="7.75rem"
            border="2px solid #0157A3"
            borderRadius="1rem"
            opacity={sensor.selected ? 'none' : '60%'}
            justifyContent="space-around"
            cursor="pointer"
            onClick={() => handleSelectSensors(index)}
          >
            <Image src={sensor.img} />
            <Text
              fontSize="0.875rem"
              color="blue.900"
              fontWeight={700}
              textAlign="center"
            >
              {sensor.name}
            </Text>
          </VStack>
        ))}
      </Flex>

      <Flex
        flexDirection={isMobile ? 'column' : 'row'}
        gap="1rem"
        alignItems="center"
        justifyContent="center"
        mt="1.75rem"
      >
        <BackButton />
        <Box onClick={handleSubmit}>
          <ContinueButton />
        </Box>
      </Flex>
    </Box>
  )
}
