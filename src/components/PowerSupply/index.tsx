import { HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { BsFillLightningFill } from 'react-icons/bs'

type PowerSupplyProps = {
  id: number
  volts: string
  icon: IconType
  active: boolean
}
export const AquariumPowerSupply = () => {
  const [selectedPower, setSelectedPower] = React.useState<PowerSupplyProps>()
  const [power, setPower] = React.useState<PowerSupplyProps[]>([
    {
      id: 1,
      volts: '127V',
      icon: BsFillLightningFill,
      active: true,
    },
    {
      id: 2,
      volts: '220V',
      icon: BsFillLightningFill,
      active: false,
    },
  ])

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

  React.useEffect(() => {
    if (!selectedPower) {
      setSelectedPower(power[0])
    }
    power
  }, [power, selectedPower])

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
                {pow.volts}
              </Text>
            </HStack>
          </HStack>
        ))}
      </HStack>
    </VStack>
  )
}
