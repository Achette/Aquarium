import { saveUser, useMedia } from '@/hooks'
import { Link, useNavigate } from 'react-router-dom'
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
  useToast,
} from '@chakra-ui/react'
import { UserService } from '@/services/auth-service'

export type UserProps = {
  username: string
  password: string
}
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>()

  const toast = useToast()
  const navigate = useNavigate()
  const { isMobileOrTablet } = useMedia()

  const onSubmit: SubmitHandler<UserProps> = async (data) => {
    try {
      const response = await UserService.login(data)

      const { token } = await response.data
      saveUser(token)

      toast({
        description: `Bem vindo ${data.username}!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      navigate('/home')
    } catch (e) {
      console.log(e)
    }
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
            placeholder="Usuário"
            type="text"
            _placeholder={{ color: 'gray.100' }}
            {...register('username', { required: true })}
          />
        </InputGroup>
        <Text
          fontSize="0.75rem"
          color="pink.400"
          mt="0.2rem"
          visibility={errors.username ? 'visible' : 'hidden'}
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
