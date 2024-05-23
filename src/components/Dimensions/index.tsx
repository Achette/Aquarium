import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { useAquarium } from '@/context'

export const AquariumDimensions = () => {
  const { setThickness, setHeight, setVolume } = useAquarium()

  const [dimensions, setDimensions] = React.useState([
    {
      name: 'thickness',
      description: 'Espessura (mm)',
      value: 0,
    },
    {
      name: 'height',
      description: 'Altura (cm)',
      value: 0,
    },
    {
      name: 'volume',
      description: 'Volume (L)',
      value: 0,
    },
  ])

  const handleIncrement = (index: number) => {
    setDimensions((prevDimensions) => {
      const newDimensions = [...prevDimensions]

      newDimensions[index].value += 0.5

      return newDimensions
    })
  }

  const handleDecrement = (index: number) => {
    setDimensions((prevDimensions) => {
      const newDimensions = [...prevDimensions]

      if (newDimensions[index].value <= 0) {
        newDimensions[index].value = 0
      } else {
        newDimensions[index].value -= 0.5
      }

      return newDimensions
    })
  }

  setThickness(dimensions[0].value)
  setHeight(dimensions[1].value)
  setVolume(dimensions[2].value)

  return (
    <VStack w="full" mt="1.5rem">
      {dimensions.map((dimension, index) => (
        <HStack key={index} w="full" justifyContent="space-between">
          <Text fontSize="1.5rem" color="blue.900" fontWeight={600}>
            {dimension.description}
          </Text>
          <HStack
            w="6rem"
            h="2.5rem"
            border="2px solid #0157A3"
            justifyContent="space-evenly"
            borderRadius="0.25rem"
            color="blue.900"
            fontSize="0.875rem"
          >
            <Icon
              as={FaMinus}
              cursor="pointer"
              onClick={() => handleDecrement(index)}
            />

            <Text>{dimension.value.toFixed(1)}</Text>
            <Icon
              as={FaPlus}
              cursor="pointer"
              onClick={() => handleIncrement(index)}
            />
          </HStack>
        </HStack>
      ))}
    </VStack>
  )
}
