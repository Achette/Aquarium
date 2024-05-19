import { Divider, Flex, Image, Text } from '@chakra-ui/react'

type Props = {
  icon: string
  data: string
}
export const BaseBox = ({ icon, data }: Props) => {
  return (
    <Flex
      w="auto"
      h="2.5rem"
      border="1px solid #0157A3"
      opacity="0.6"     
      alignItems="center"
      gap="0.24rem"
      borderRadius="12px"
    >
      <Image src={icon} ml="0.25rem" />
      <Divider orientation="vertical" />
      <Text mr="0.25rem" fontSize="1rem" color="blue.900" opacity="0.6">
        {data}
      </Text>
    </Flex>
  )
}
