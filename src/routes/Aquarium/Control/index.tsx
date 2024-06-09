import React from 'react'
import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { InfoHeader } from '@/components'
import { AccessoriesProps } from '@/models'
import { Accessories } from './Accessories'
import { Box, Flex, Text } from '@chakra-ui/react'
import { getAccessoriesByAquariumId } from '@/redux/reducers/accessoriesDetails'

type AquariumControlProps = AccessoriesProps & {
  selected: boolean
}

export const AquariumControl = () => {
  const { isMobileOrTablet } = useMedia()
  const accessories = useSelector(getAccessoriesByAquariumId)

  const [filteredAccessories, setFilteredAccessories] = React.useState<
    AquariumControlProps[]
  >(
    accessories
      .map((item) => ({
        ...item,
        selected: false,
      }))
      .filter((item) => item.name !== 'Plantas naturais')
  )

  const handleAccessoryClick = (id: string) => {
    setFilteredAccessories((prevAccessories) =>
      prevAccessories.map((accessory) =>
        accessory.id === id
          ? { ...accessory, selected: !accessory.selected }
          : accessory
      )
    )
  }

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
            <Accessories
              key={accessory.id}
              id={accessory.id}
              name={accessory.name}
              selected={accessory.selected}
              onHandleClick={() => handleAccessoryClick(accessory.id)}
            />
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
