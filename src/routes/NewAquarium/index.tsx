import { AquariumMaterial, PowerSupply } from '@/components'
import { AquariumFormats } from '@/components/Formats'
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

type NewAquariumProps = {
  name: string
}
export const NewAquarium = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAquariumProps>()

  const onSubmit: SubmitHandler<NewAquariumProps> = (data) => {
    console.log(data)
  }
  return (
    <Box p="1.5rem 1rem 0">
      <Heading as="h2" color="blue.900" fontSize="1.75rem">
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
          <PowerSupply />
          {/*  <Button type="submit">Enviar</Button> */}
        </FormControl>
      </VStack>
    </Box>
  )
}
