import { useMedia } from '@/hooks'
import { useAquarium } from '@/context'
import { NewAquariumProps } from '@/models'
import { useNavigate } from 'react-router-dom'
import { AquariumFormats } from '@/components/Formats'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AquariumServices } from '@/services/aquarium-services'
import {
  AquariumDimensions,
  AquariumMaterial,
  AquariumPowerSupply,
} from '@/components'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import * as localStorageService from '@/hooks'

export const NewAquarium = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { isMobile, isDesktop, isMobileOrTablet } = useMedia()

  const { format, material, powerSupply } = useAquarium()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAquariumProps>()

  const onSubmit: SubmitHandler<NewAquariumProps> = async (data) => {
    const newAquarium = {
      name: data.name,
      format,
      material,
      powerSupply,
    }

    const response = await AquariumServices.create(newAquarium)
    const id = response.id
    localStorageService.saveAquariumId(id)

    toast({
      description: `Aquário ${newAquarium.name} criado com sucesso!`,
      containerStyle: { color: 'white' },
      position: isMobileOrTablet ? 'top' : 'bottom-right',
      isClosable: true,
    })

    navigate('/new-aquarium/accessory')
  }
  return (
    <Box p="1.5rem 1rem 0" px={isDesktop ? '16%' : ''}>
      <Heading
        as="h2"
        color="blue.900"
        fontSize="1.75rem"
        textAlign={isDesktop ? 'center' : 'start'}
      >
        Novo Aquário
      </Heading>
      <VStack>
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            h="3.5rem"
            variant="flushed"
            placeholder="Nome do aquário"
            {...register('name', { required: true })}
          />

          <Text
            fontSize="0.75rem"
            color="pink.400"
            mt="0.2rem"
            visibility={errors.name ? 'visible' : 'hidden'}
            mb="1rem"
          >
            Nome do aquário é obrigatório
          </Text>

          <AquariumFormats />
          <AquariumMaterial />
          <AquariumPowerSupply />
          <AquariumDimensions />

          <Flex
            flexDirection={isMobile ? 'column' : 'row'}
            gap="1rem"
            alignItems="center"
            justifyContent="center"
            mt="1.75rem"
          >
            <Button
              type="submit"
              w="19.5rem"
              h="3rem"
              borderRadius="3.75rem"
              color="white.900"
              bgColor="blue.900"
              _hover={{ bgColor: 'blue.500' }}
              fontSize="1rem"
            >
              Avançar
            </Button>

            <Button
              w="19.5rem"
              h="3rem"
              colorScheme="blue"
              variant="outline"
              borderRadius="3.75rem"
              fontSize="1rem"
              onClick={() => navigate(-1)}
            >
              Voltar
            </Button>
          </Flex>
        </FormControl>
      </VStack>
    </Box>
  )
}
