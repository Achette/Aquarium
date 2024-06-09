import React from 'react'
import { useMedia } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { addPets } from '@/services/pets-services'
import { aquariumPets } from '@/assets/helpers/pets'
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
  useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAquariumId,
  getAquariumId,
} from '@/redux/reducers/aquariumIdSlice'
import { AppDispatch } from '@/redux/store'

export const AquariumPets = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { isDesktop, isMobile, isMobileOrTablet } = useMedia()
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useSelector(getAquariumId)

  const [pets, setPets] = React.useState(aquariumPets)

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
      .filter((pet) => pet.selected && pet.quantity > 0)
      .map((pet) => ({
        species: pet.name,
        quantity: pet.quantity,
      }))

    try {
      if (selectedPets.length) {
        await Promise.all(
          selectedPets.map(async (pet) => {
            await addPets(id, { species: pet.species, quantity: pet.quantity })
            toast({
              description: `${pet.quantity} ${pet.species}(s) adicionado(s) ao aquário`,
              containerStyle: { color: 'white' },
              position: isMobileOrTablet ? 'bottom' : 'bottom-right',
              isClosable: true,
              duration: 2000,
            })
          })
        )
      }

      navigate('/home')
    } catch (e) {
      toast({
        description: 'Não foi possível adicionar os pets ao aquário',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    } finally {
      dispatch(clearAquariumId())
    }
  }, [dispatch, id, isMobileOrTablet, navigate, pets, toast])

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
        <BackButton />
        <Box onClick={handleSubmit}>
          <ContinueButton />
        </Box>
      </Flex>
    </Box>
  )
}
