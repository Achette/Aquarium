import { useMedia } from '@/hooks'
import { NewUserProps } from '@/models'
import { PiUserThin } from 'react-icons/pi'
import { CiMail, CiUnlock } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import { UserService } from '@/services/auth-service'
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

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserProps>()

  const navigate = useNavigate()
  const toast = useToast()
  const { isMobileOrTablet } = useMedia()

  const onSubmit: SubmitHandler<NewUserProps> = async (data) => {
    try {
      await UserService.create(data)

      toast({
        description: `Conta cadastrada com sucesso!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })

      navigate('/account')
    } catch (e) {
      toast({
        description: 'Não foi possível criar sua conta! Tente novamente.',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Box mt="2rem">
        <Heading as="h1" fontSize="1.5rem" color="blue.900" mb="0.25rem">
          Bem-vindo
        </Heading>
        <Text fontSize="0.75rem" color="blue.400">
          Crie sua conta para aproveitar nossas funcionalidades
        </Text>
      </Box>

      <FormControl as="form" onSubmit={handleSubmit(onSubmit)} mt="1.5rem">
        {/* Username */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PiUserThin size="24px" />
          </InputLeftElement>
          <Input
            variant="flushed"
            placeholder="Nome"
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
          Nome é obrigatório
        </Text>

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

        {/* Confirmar senha */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiUnlock size="24px" />
          </InputLeftElement>
          <Input
            variant="flushed"
            type="password"
            placeholder="Confirme sua senha"
            _placeholder={{ color: 'gray.100' }}
            {...register('repeat_password', { required: true })}
          />
        </InputGroup>
        <Text
          fontSize="0.75rem"
          color="pink.400"
          mt="0.2rem"
          visibility={errors.repeat_password ? 'visible' : 'hidden'}
        >
          Confirmar senha é obrigatório
        </Text>

        <Button
          type="submit"
          w="19.5rem"
          borderRadius="3.75rem"
          colorScheme="blue"
          variant="outline"
          mt="1.5rem"
        >
          Cadastrar
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
        Já possui uma conta?{' '}
        <LinkChakra as={Link} to="/account" fontWeight={700} color="blue.900">
          Entrar
        </LinkChakra>
      </Text>
    </Box>
  )
}
