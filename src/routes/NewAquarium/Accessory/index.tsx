import React from 'react'
import { useMedia } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { BackButton, ContinueButton } from '@/components'
import { addAccesories } from '@/services/accessories-services'
import { aquariumAccessories } from '@/assets/helpers/accessories'
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

export const AquariumAccessory = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { id } = useSelector(getAquariumId)

  const { isDesktop, isMobile, isMobileOrTablet } = useMedia()

  const [accessories, setAccessories] = React.useState(aquariumAccessories)

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

    const data = [...selectedAccessories]

    try {
      if (data.length) {
        await Promise.all(
          data.map(async (accessory) => {
            await addAccesories(id!, { name: accessory })
            toast({
              description: `${accessory} adicionado ao aquário`,
              containerStyle: { color: 'white' },
              position: isMobileOrTablet ? 'bottom' : 'bottom-right',
              isClosable: true,
              duration: 2000,
            })
          })
        )
      }

      navigate('/new-aquarium/sensors')
    } catch (e) {
      toast({
        description: 'Não foi possível adicionar os acessórios ao aquário',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }, [accessories, id, isMobileOrTablet, navigate, toast])

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
        <BackButton />
        <Box onClick={handleSubmit}>
          <ContinueButton />
        </Box>
      </Flex>
    </Box>
  )
}
