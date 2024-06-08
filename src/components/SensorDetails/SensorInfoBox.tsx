import { HStack, VStack, Text, Image } from '@chakra-ui/react'

type SensorDetailsProps = {
  icon: string
  info: string
  description: string
}
export const SensorInfoBox = ({
  icon,
  info,
  description,
}: SensorDetailsProps) => {
  return (
    <>
      {icon && info && description && (
        <VStack
          w="auto"
          h="4.5rem"
          border="1px solid #0157A3"
          alignItems="center"
          gap="-0.25rem"
          borderRadius="12px"
        >
          <HStack
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            p="0.5rem"
          >
            <Image src={icon} />
            <Text color="blue.900">{description}</Text>
          </HStack>
          <Text color="blue.900" fontWeight={800}>
            {info}
          </Text>
        </VStack>
      )}
    </>
  )
}
