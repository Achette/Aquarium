import { Button } from '@chakra-ui/react'

export const ContinueButton = () => {
  return (
    <Button
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
  )
}
