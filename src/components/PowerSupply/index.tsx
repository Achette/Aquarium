import React from 'react'
import { useAquarium } from '@/context'
import { PowerSupplyProps } from '@/models'
import { powerSuppy } from '@/assets/helpers/powerSupply'
import { HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'

export const AquariumPowerSupply = () => {
  const [selectedPower, setSelectedPower] = React.useState<PowerSupplyProps>({
    id: 0,
    volts: '',
    icon: undefined,
    active: false,
  })
  const [power, setPower] = React.useState<PowerSupplyProps[]>(powerSuppy)

  const { setPowerSupply } = useAquarium()

  React.useEffect(() => {
    if (!selectedPower.volts) {
      setSelectedPower(power[0])
    }
    power
  }, [power, selectedPower])

  const handleSetActive = (id: number) => {
    const updatedPower = power.map((pow) => {
      if (pow.id === id) {
        return { ...pow, active: true }
      } else {
        return { ...pow, active: false }
      }
    })
    setPower(updatedPower)
  }

  const handleSelectPowerSupply = (pow: PowerSupplyProps) => {
    setSelectedPower(pow)
    handleSetActive(pow.id)
  }

  setPowerSupply(selectedPower.volts)

  return (
    <VStack w="20.5rem" alignItems="flex-start" mt="1.5rem">
      <Heading as="h3" color="blue.900" fontSize="1.5rem">
        Voltagem
      </Heading>
      <HStack>
        {power.map((pow) => (
          <HStack
            key={pow.id}
            cursor="pointer"
            onClick={() => handleSelectPowerSupply(pow)}
          >
            <HStack
              border="2px solid #0157A3"
              p=".25rem .5rem"
              borderRadius=".25rem"
              opacity={pow.active ? 'none' : '50%'}
            >
              <Icon as={pow.icon} color="blue.900" opacity="60%" />
              <Text fontSize="0.75rem" color="blue.900" opacity="60%">
                {pow.volts}V
              </Text>
            </HStack>
          </HStack>
        ))}
      </HStack>
    </VStack>
  )
}
