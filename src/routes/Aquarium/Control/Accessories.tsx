import { useMedia } from '@/hooks'
import { PiPowerFill } from 'react-icons/pi'
import { BuildSVG } from '@/utils/buildSVG'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'

type AccesoryProps = {
  name: string
}
export const Accessories = ({ name }: AccesoryProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Flex
      h={isMobileOrTablet ? '4.25rem' : '5.5rem'}
      border="2px solid #0157A3"
      borderRadius="1rem"
      justifyContent="space-between"
      alignItems="center"
      mt="1rem"
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
