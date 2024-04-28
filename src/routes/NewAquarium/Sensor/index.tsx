import { useMedia } from '@/hooks'
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import luminosity from '../../../assets/sensors/1_luminosity.svg'
import oxygen from '../../../assets/sensors/2_oxigen.svg'
import waterLevel from '../../../assets/sensors/3_water_level.svg'
import pH from '../../../assets/sensors/4_ph.svg'
import outsideTemperature from '../../../assets/sensors/5_outside_temperature.svg'
import insideTemperature from '../../../assets/sensors/6_inside_temperature.svg'
import React from 'react'
import { BackButton, ContinueButton } from '@/components'

export const AquariumSensor = () => {
  const { isDesktop, isMobile } = useMedia()

  const [sensors, setSensors] = React.useState([
    {
      id: 1,
      name: 'Luminosidade',
      img: luminosity,
      selected: false,
    },
    {
      id: 2,
      name: 'Oxígênio',
      img: oxygen,
      selected: false,
    },
    {
      id: 3,
      name: 'Nível de água',
      img: waterLevel,
      selected: false,
    },
    {
      id: 4,
      name: 'pH',
      img: pH,
      selected: false,
    },
    {
      id: 5,
      name: 'Temperatura externa',
      img: outsideTemperature,
      selected: false,
    },
    {
      id: 6,
      name: 'Temperatura interna',
      img: insideTemperature,
      selected: false,
    },
  ])

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
        <ContinueButton data={sensors} path="/new-aquarium/pets" />
        <BackButton />
      </Flex>
    </Box>
  )
}
