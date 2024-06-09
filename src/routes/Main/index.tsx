import React from 'react'
import { useMedia } from '@/hooks'
import { AppDispatch } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { AddButton, AquariumList, Header } from '@/components'
import { Box, Text, VStack, useToast } from '@chakra-ui/react'
import {
  fetchAllAquariumUser,
  getAllUserAquariums,
} from '@/redux/reducers/aquariumSlice'

export const Main = () => {
  const toast = useToast()
  const { isMobileOrTablet } = useMedia()
  const dispatch = useDispatch<AppDispatch>()

  const fetchAquariums = React.useCallback(async () => {
    try {
      dispatch(fetchAllAquariumUser())
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
  }, [dispatch, isMobileOrTablet, toast])

  React.useEffect(() => {
    fetchAquariums()
  }, [fetchAquariums])
  const aquariums = useSelector(getAllUserAquariums)

  return (
    <Box>
      <Header />
      <VStack h="calc(100vh - 4rem)" alignItems="center" mt="2rem">
        {aquariums.length > 0 &&
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
