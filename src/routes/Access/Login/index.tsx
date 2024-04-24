import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { CiMail, CiUnlock } from 'react-icons/ci'
import { PiUserThin } from 'react-icons/pi'

export const Login = () => {
  return (
    <Box>
      <Box mt="1.5rem">
        <Heading as="h1" fontSize="1.5rem" color="blue.900" mb="0.25rem">
          Bem-vindo
        </Heading>
        <Text fontSize="0.75rem" color="blue.400">
          Crie sua conta para aproveitar nossas funcionalidades
        </Text>
      </Box>

      <FormControl as="form">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PiUserThin size="24px" />
          </InputLeftElement>
          <Input variant="flushed" placeholder="Nome" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiMail size="24px" />
          </InputLeftElement>
          <Input variant="flushed" placeholder="E-mail" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiUnlock size="24px" />
          </InputLeftElement>
          <Input variant="flushed" placeholder="Senha" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiUnlock size="24px" />
          </InputLeftElement>
          <Input variant="flushed" placeholder="Confirme sua senha" />
        </InputGroup>

        <Button
          w="19.5rem"
          borderRadius="3.75rem"
          colorScheme="blue"
          variant="outline"
          mt="1.5rem"
        >
          Cadastrar
        </Button>
      </FormControl>
    </Box>
  )
}
