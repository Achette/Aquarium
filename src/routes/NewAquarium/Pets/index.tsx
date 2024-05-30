import React from 'react'
import { useMedia } from '@/hooks'
import * as localStorageService from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import fish from '../../../assets/img/pets/1_fish.svg'
import frog from '../../../assets/img/pets/3_frog.svg'
import snake from '../../../assets/img/pets/4_snake.svg'
import turtle from '../../../assets/img/pets/2_turtle.svg'
import { BackButton, ContinueButton } from '@/components'

import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

export const AquariumPets = () => {
  const { isDesktop, isMobile } = useMedia()
  const navigate = useNavigate()

  const [pets, setPets] = React.useState([
    {
      id: 1,
      name: 'Peixe',
      img: fish,
      selected: false,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Tartaruga',
      img: turtle,
      selected: false,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Sapo',
      img: frog,
      selected: false,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Cobra',
      img: snake,
      selected: false,
      quantity: 0,
    },
  ])

  const handleSelectPets = (index: number) => {
    setPets((prevPets) => {
      const selectedPets = [...prevPets]

      selectedPets[index] = {
        ...prevPets[index],
        selected: !prevPets[index].selected,
      }

      return selectedPets
    })
  }

  const handleIncrement = (index: number) => {
    setPets((prevPets) => {
      const newPetQuantity = [...prevPets]

      if (index !== -1) {
        newPetQuantity[index].quantity += 1
      }

      return newPetQuantity
    })
  }

  const handleDecrement = (index: number) => {
    setPets((prevPets) => {
      const newPetQuantity = [...prevPets]

      if (newPetQuantity[index].quantity <= 0) {
        newPetQuantity[index].quantity = 0
      } else {
        newPetQuantity[index].quantity -= 1
      }

      return newPetQuantity
    })
  }

  const handleSubmit = React.useCallback(async () => {
    const selectedPets = pets
      .filter((pet) => pet.selected)
      .reduce((acc, pet) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        acc[pet.name] = { quantity: pet.quantity }
        return acc
      }, {
        Peixe: { quantity: 0 },
        Tartaruga: { quantity: 0 },
        Sapo: { quantity: 0 },
        Cobra: { quantity: 0 }
      })

    const data = {
      id: localStorageService.getAquariumId(),
      pets: selectedPets,
    }

    try {
      console.log(selectedPets)
     // await AquariumServices.newPets(data)
      navigate('/home')
    } catch (e) {
      /* empty */
    } finally {
      localStorageService.removeAquariumId()
    }
  }, [navigate, pets])

  return (
    <Box px={isDesktop ? '16%' : '.25rem'} mt="1.5rem">
      <Heading
        as="h2"
        color="blue.900"
        fontSize="1.75rem"
        textAlign={isDesktop ? 'center' : 'start'}
        mb="3rem"
      >
        Pets
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" gap=".75rem">
        {pets.map((pet, index) => (
          <VStack
            key={pet.id}
            border="2px solid #0157A3"
            borderRadius="1rem"
            opacity={pet.selected ? 'none' : '60%'}
            justifyContent="space-around"
            cursor="pointer"
            h="8.75rem"
          >
            <VStack w="6.75rem" onClick={() => handleSelectPets(index)}>
              <Image src={pet.img} />
              <Text
                fontSize="0.875rem"
                color="blue.900"
                fontWeight={700}
                textAlign="center"
              >
                {pet.name}
              </Text>
            </VStack>
            {pet.selected && (
              <HStack
                justifyContent="space-evenly"
                borderRadius="0.25rem"
                color="blue.900"
                fontSize="0.875rem"
              >
                <Icon
                  as={FaMinus}
                  cursor="pointer"
                  onClick={() => handleDecrement(index)}
                />

                <Text>{pet.quantity}</Text>
                <Icon
                  as={FaPlus}
                  cursor="pointer"
                  onClick={() => handleIncrement(index)}
                />
              </HStack>
            )}
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
