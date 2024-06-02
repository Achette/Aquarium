import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { InfoHeader } from '@/components'
import { Accessories } from './Accessories'
import { Box, Flex, Text } from '@chakra-ui/react'
import { getAccessoriesByAquariumId } from '@/redux/reducers/accessoriesDetails'

export const AquariumControl = () => {
  const { isMobileOrTablet } = useMedia()
  const accessories = useSelector(getAccessoriesByAquariumId)

  const filteredAccessories = accessories.filter((item) => item.name !== 'Plantas naturais')

  return (
    <Flex
      w="auto"
      flexDir="column"
      alignItems="center"
      px={isMobileOrTablet ? '0.75rem' : 0}
      pt="1.5rem"
    >
      <Box maxW="37rem" w="full">
        <InfoHeader heading="Controles" />
        {accessories.length > 0 ? (
          filteredAccessories.map((accessory) => (
            <Accessories key={accessory.id} name={accessory.name} />
          ))
        ) : (
          <Text
            color="blue.900"
            opacity="0.6"
            textAlign="center"
            fontSize="1rem"
            mt="15rem"
          >
            Não há acessórios cadastrado neste aquário
          </Text>
        )}
      </Box>
    </Flex>
  )
}
