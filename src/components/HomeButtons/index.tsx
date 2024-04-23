import { Button, Flex } from '@chakra-ui/react'

export const HomeButtons = () => {
  return (
    <Flex w="full" justifyContent="space-around" mt="2rem" mb="2rem">
      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.50"
        color="blue.900"
        fontWeight={400}
      >
        Cadastrar
      </Button>

      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.900"
        color="white.400"
        fontWeight={400}
      >
        Entrar
      </Button>
    </Flex>
  )
}
