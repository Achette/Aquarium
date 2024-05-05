import { Link } from 'react-router-dom'
import { CiMail, CiUnlock } from 'react-icons/ci'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react'

export type UserProps = {
  email: string
  password: string
}
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>()

  const onSubmit: SubmitHandler<UserProps> = (data) => {
    console.log(data)
  }

  return (
    <Box>
      <Box mt="2rem">
        <Heading as="h1" fontSize="1.5rem" color="blue.900" mb="0.25rem">
          Olá
        </Heading>
        <Text fontSize="0.75rem" color="blue.400">
          Faça login para acessar sua conta
        </Text>
      </Box>

      <FormControl as="form" onSubmit={handleSubmit(onSubmit)} mt="2.5rem">
        {/* E-mail */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiMail size="24px" />
          </InputLeftElement>
          <Input
            variant="flushed"
            placeholder="E-mail"
            _placeholder={{ color: 'gray.100' }}
            {...register('email', { required: true })}
          />
        </InputGroup>
        <Text
          fontSize="0.75rem"
          color="pink.400"
          mt="0.2rem"
          visibility={errors.email ? 'visible' : 'hidden'}
        >
          E-mail é obrigatório
        </Text>

        {/* Senha */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiUnlock size="24px" />
          </InputLeftElement>
          <Input
            variant="flushed"
            type="password"
            placeholder="Senha"
            _placeholder={{ color: 'gray.100' }}
            {...register('password', { required: true })}
          />
        </InputGroup>
        <Text
          fontSize="0.75rem"
          color="pink.400"
          mt="0.2rem"
          visibility={errors.password ? 'visible' : 'hidden'}
        >
          Senha é obrigatório
        </Text>

        <Button
          type="submit"
          w="19.5rem"
          borderRadius="3.75rem"
          bg="blue.900"
          color="white.400"
          mt="1.5rem"
        >
          Entrar
        </Button>
      </FormControl>

      <Text
        m="1.25rem 0 0 0"
        textAlign="center"
        color="blue.400"
        fontSize="md"
        fontWeight={300}
        lineHeight="1.375rem"
        letterSpacing="-0.41px"
      >
        Ainda não tem uma conta?{' '}
        <LinkChakra
          as={Link}
          to="/account/register"
          fontWeight={700}
          color="blue.900"
        >
          Cadastrar
        </LinkChakra>
      </Text>
    </Box>
  )
}
