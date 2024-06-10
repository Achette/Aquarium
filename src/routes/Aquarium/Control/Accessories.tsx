import { BuildSVG } from '@/utils'
import { useMedia } from '@/hooks'
import { PiPowerFill } from 'react-icons/pi'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'

type AccesoryProps = {
  id: string
  name: string
  selected: boolean
  onHandleClick: (id: string) => void
}
export const Accessories = ({
  id,
  name,
  selected,
  onHandleClick,
}: AccesoryProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Flex
      h={isMobileOrTablet ? '4.25rem' : '5.5rem'}
      border="2px solid #0157A3"
      borderRadius="1rem"
      justifyContent="space-between"
      alignItems="center"
      mt="1rem"
      opacity={selected ? '' : '0.5'}
      title="Clique para ativar o acessório do aquário"
      cursor="pointer"
      onClick={() => onHandleClick(id)}
    >
      <Flex alignItems="center" gap="1rem">
        <Image
          p="0.5rem"
          src={BuildSVG(name)}
          w={isMobileOrTablet ? '3.75rem' : '5rem'}
          h={isMobileOrTablet ? '3.75rem' : '5rem'}
        />
        <Text fontSize="1rem" color="blue.900" fontWeight={700}>
          {name}
        </Text>
      </Flex>
      <Icon
        as={PiPowerFill}
        color="blue.900"
        w={isMobileOrTablet ? '2.5rem' : '5rem'}
        h={isMobileOrTablet ? '2.5rem' : '5rem'}
      />
    </Flex>
  )
}
