import { useMedia } from '@/hooks'
import iconFood from '@/assets/icons/iconFood.svg'
import iconClear from '@/assets/icons/iconClear.svg'
import { getActualDate, formatCurrentDateTime } from '@/utils'
import { Flex, HStack, Image, Text, VStack, useToast } from '@chakra-ui/react'

type CleanAndFeedButtonsProps = {
  getCleanDate: (arg: string) => void
  getFeedDate: (arg: string) => void
}
export const CleanAndFeedButtons = ({
  getCleanDate,
  getFeedDate,
}: CleanAndFeedButtonsProps) => {
  const { isMobileOrTablet, isMobile } = useMedia()
  const toast = useToast()

  const handleClickClean = () => {
    toast({
      description: `A marcação de data de limpeza do aquário foi adicionada!`,
      containerStyle: { color: 'white' },
      position: isMobileOrTablet ? 'top' : 'bottom-right',
      isClosable: true,
      duration: 2000,
    })
    getCleanDate(getActualDate())
  }

  const handleClickFeed = () => {
    toast({
      description: `A marcação de data de alimentação do aquário foi adicionada!`,
      containerStyle: { color: 'white' },
      position: isMobileOrTablet ? 'top' : 'bottom-right',
      isClosable: true,
      duration: 2000,
    })
    getFeedDate(formatCurrentDateTime())
  }

  return (
    <HStack
      w="full"
      mt={isMobile ? '-2.25rem' : ''}
      h={isMobileOrTablet ? '5rem' : '7.25rem'}
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack h="5rem" w="5rem" cursor="pointer" onClick={handleClickClean}>
        <Flex
          h="3rem"
          w="3rem"
          border="2px solid #0157A3"
          borderRadius="100px"
          alignItems="center"
          justifyContent="center"
          bgColor="blue.100"
        >
          <Image src={iconClear} w="2rem" h="2.25rem" />
        </Flex>
        <Text fontSize={isMobileOrTablet ? '0.75rem' : '1rem'} color="blue.900">
          Limpar
        </Text>
      </VStack>

      <VStack h="5rem" w="5rem" cursor="pointer" onClick={handleClickFeed}>
        <Flex
          h="3rem"
          w="3rem"
          border="2px solid #0157A3"
          borderRadius="200px"
          alignItems="center"
          justifyContent="center"
          bgColor="blue.100"
        >
          <Image src={iconFood} w="2rem" h="2.25rem" />
        </Flex>
        <Text fontSize={isMobileOrTablet ? '0.75rem' : '1rem'} color="blue.900">
          Alimentar
        </Text>
      </VStack>
    </HStack>
  )
}
