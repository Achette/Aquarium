import { useMedia } from '@/hooks'
import { BuildIconType } from '@/utils'
import { IoMdSettings } from 'react-icons/io'
import { Flex, Icon, Text } from '@chakra-ui/react'

type HeaderProps = {
  heading: string
}
export const InfoHeader = ({ heading }: HeaderProps) => {
  const { isMobileOrTablet } = useMedia()
  return (
    <Flex
      maxWidth="58rem"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap="1rem">
        <Icon
          as={BuildIconType(heading)}
          color="blue.900"
          h={isMobileOrTablet ? '2.5rem' : '3.75rem'}
          w={isMobileOrTablet ? '2.5rem' : '3.75rem'}
        />
        <Text
          color="blue.900"
          fontSize={isMobileOrTablet ? '1.5rem' : '2.5rem'}
          fontWeight={800}
        >
          {heading}
        </Text>
      </Flex>

      <Icon as={IoMdSettings} color="blue.900" h="1.5rem" w="1.5rem" />
    </Flex>
  )
}
