import { AddButton, Header } from '@/components'
import { Box, Text, VStack } from '@chakra-ui/react'

export const Main = () => {
  return (
    <Box>
      <Header />
      <VStack
        h="calc(100vh - 4rem)"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="blue.900">Nenhum aquário cadastrado</Text>
      </VStack>

      <AddButton />
    </Box>
  )
}
