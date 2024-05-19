import React from 'react'
import { useMedia } from '@/hooks'
import { BackButton, ContinueButton } from '@/components'
import Light from '../../../assets/img/accessories/5_led.svg'
import Feeder from '../../../assets/img/accessories/2_feeder.svg'
import Filter from '../../../assets/img/accessories/4_filter.svg'
import Plants from '../../../assets/img/accessories/6_accessories.svg'
import WaterPump from '../../../assets/img/accessories/1_waterPump.svg'
import Thermostat from '../../../assets/img/accessories/3_thermostat.svg'
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import * as localStorageService from '@/hooks'
import { AquariumServices } from '@/services/aquarium-services'
import { useNavigate } from 'react-router-dom'

export const AquariumAccessory = () => {
  const { isDesktop, isMobile } = useMedia()
  const navigate = useNavigate()

  const [accessories, setAccessories] = React.useState([
    {
      id: 1,
      name: 'Bombinha',
      img: WaterPump,
      selected: false,
    },
    {
      id: 2,
      name: 'Alimentador Automático',
      img: Feeder,
      selected: false,
    },
    {
      id: 3,
      name: 'Termostato / Aquecedor',
      img: Thermostat,
      selected: false,
    },
    {
      id: 4,
      name: 'Filtro ',
      img: Filter,
      selected: false,
    },
    {
      id: 5,
      name: 'Luz LED ',
      img: Light,
      selected: false,
    },
    {
      id: 6,
      name: 'Plantas naturais ',
      img: Plants,
      selected: false,
    },
  ])

  const handleSelectAccessory = (index: number) => {
    setAccessories((prevAccessories) => {
      const selectedAccessories = [...prevAccessories]

      selectedAccessories[index] = {
        ...selectedAccessories[index],
        selected: !selectedAccessories[index].selected,
      }

      return selectedAccessories
    })
  }

  const handleSubmit = React.useCallback(async () => {
    const selectedAccessories = accessories
      .filter((accessory) => accessory.selected)
      .map((accessory) => accessory.name)

    const data = {
      aquariumId: localStorageService.getAquariumId(),
      accessories: { ...selectedAccessories },
    }

    try {
      await AquariumServices.newAccessories(data)
      navigate('/new-aquarium/sensors')
    } catch (e) {
      /* empty */
    }
  }, [accessories, navigate])

  return (
    <Box px={isDesktop ? '16%' : '.25rem'} mt="1.5rem">
      <Heading
        as="h2"
        color="blue.900"
        fontSize="1.75rem"
        textAlign={isDesktop ? 'center' : 'start'}
        mb="3rem"
      >
        Acessórios
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" gap=".75rem">
        {accessories.map((accessory, index) => (
          <VStack
            key={accessory.id}
            w="6.75rem"
            h="7.75rem"
            border="2px solid #0157A3"
            borderRadius="1rem"
            opacity={accessory.selected ? 'none' : '60%'}
            justifyContent="space-around"
            cursor="pointer"
            onClick={() => handleSelectAccessory(index)}
          >
            <Image src={accessory.img} />
            <Text
              fontSize="0.875rem"
              color="blue.900"
              fontWeight={700}
              textAlign="center"
            >
              {accessory.name}
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
        <Box onClick={handleSubmit}>
          <ContinueButton />
        </Box>
        <BackButton />
      </Flex>
    </Box>
  )
}
