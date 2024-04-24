import { Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const HomeButtons = () => {
  const navigate = useNavigate()
  
  return (
    <Flex w="full" justifyContent="space-around" mt="2rem" mb="2rem">
      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.50"
        color="blue.900"
        fontWeight={400}
        onClick={() => navigate('/account/register')}
      >
        Cadastrar
      </Button>

      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.900"
        color="white.400"
        fontWeight={400}
        onClick={() => navigate('/account')}
      >
        Entrar
      </Button>
    </Flex>
  )
}
