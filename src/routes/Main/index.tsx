import React from 'react'
import { AquariumProps } from '@/models'
import { AddButton, AquariumList, Header } from '@/components'
import { getAllAquariums } from '@/services/aquarium-services'
import { Box, Text, VStack, useToast } from '@chakra-ui/react'
import { useMedia } from '@/hooks'

export const Main = () => {
  const toast = useToast()
  const { isMobileOrTablet } = useMedia()

  const [aquariums, setAquariums] = React.useState<AquariumProps[]>()

  const fetchAquariums = React.useCallback(async () => {
    try {
      const response = await getAllAquariums()
      setAquariums(response.data)
    } catch (e) {
      toast({
        description:
          'Erro! Não foi possível carregar seus aquários. Tente novamente.',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }, [isMobileOrTablet, toast])

  React.useEffect(() => {
    fetchAquariums()
  }, [fetchAquariums])

  return (
    <Box>
      <Header />
      <VStack h="calc(100vh - 4rem)" alignItems="center" mt="2rem">
        {aquariums &&
          aquariums.map((aquarium) => (
            <AquariumList
              key={aquarium.id}
              id={aquarium.id}
              name={aquarium.name}
              format={aquarium.format_aquarium}
              fetchAquariums={fetchAquariums}
            />
          ))}

        {!aquariums?.length && (
          <Text color="blue.900" margin="auto">
            Nenhum aquário cadastrado 😿
          </Text>
        )}
      </VStack>

      <AddButton />
    </Box>
  )
}
