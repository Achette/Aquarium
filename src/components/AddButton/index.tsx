import { useMedia } from '@/hooks'
import { IoIosAdd } from 'react-icons/io'
import { Icon, Link as LinkChakra, Text, VStack } from '@chakra-ui/react'

export const AddButton = () => {
  const { isMobileOrTablet } = useMedia()

  return (
    <LinkChakra title="Add">
      <VStack
        position="fixed"
        right={isMobileOrTablet ? 8 : '22%'}
        bottom={isMobileOrTablet ? 8 : 12}
      >
        <Icon
          as={IoIosAdd}
          w="3rem"
          h="3rem"
          bg="blue.50"
          color="blue.900"
          borderRadius="full"
          border="1px solid #0157A3"
        />
        <Text color="blue.900" fontSize="1rem">
          Novo Aquário
        </Text>
      </VStack>
    </LinkChakra>
  )
}
