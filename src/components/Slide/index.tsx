import { VStack, Text } from '@chakra-ui/react'

type SlideProps = {
  content: string
}

export const SlideCard = ({ content }: SlideProps) => {
  return (
    <VStack
      w="auto"
      h="8rem"
      bg="transparent"
      alignContent="center"
      justifyContent="center"

    >
      <VStack w="22rem" alignContent="center" justifyContent="center" px={10} >
        <Text fontSize="md" textAlign="center" color="gray.400">
          {content}
        </Text>
      </VStack>
    </VStack>
  )
}
