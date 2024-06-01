import React from 'react'
import { AquariumProps } from '@/models'
import { BuildSVG } from '@/utils/buildSVG'
import { useNavigate } from 'react-router-dom'
import { AddButton, Header } from '@/components'
import { getAllAquariums } from '@/services/aquarium-services'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useMedia } from '@/hooks'

export const Main = () => {
  const [aquariums, setAquariums] = React.useState<AquariumProps[]>()
  const { isMobile } = useMedia()
  const navigate = useNavigate()

  const fetchAquariums = React.useCallback(async () => {
    try {
      const response = await getAllAquariums()
      setAquariums(response)
    } catch (e) {
      console.log(e)
    }
  }, [])

  React.useEffect(() => {
    fetchAquariums()
  }, [fetchAquariums])

  return (
    <Box>
      <Header />
      <VStack h="calc(100vh - 4rem)" alignItems="center" mt="2rem">
        {aquariums &&
          aquariums.map((aquarium, index) => (
            <HStack
              key={index}
              cursor="pointer"
              maxWidth="58rem"
              w="full"
              px={isMobile ? '2rem' : '1rem'}
              mb="1rem"
            >
              <HStack
                w="full"
                h={isMobile ? '3.5rem' : '4.75rem'}
                border="2px solid #0157A3"
                p=".25rem 1rem"
                borderRadius="100"
                gap="1rem"
                onClick={() => navigate(`/aquarium/${aquarium.id}`)}
              >
                <Image
                  src={BuildSVG(aquarium.format_aquarium)}
                  w={isMobile ? '2.5rem' : '3.75rem'}
                  h={isMobile ? '2.5rem' : '3.75rem'}
                />
                <Text
                  fontSize={isMobile ? '1.375rem' : '1.5rem'}
                  color="blue.900"
                  fontWeight={700}
                >
                  {aquarium.name}
                </Text>
              </HStack>
            </HStack>
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
