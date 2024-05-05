import { useMedia } from '@/hooks'
import { Box, VStack } from '@chakra-ui/react'
import {
  AquarioImg,
  BenefitsSlider,
  CloudsBg,
  FullLogo,
  HomeButtons,
} from '@/components'

export const Home = () => {
  const { isDesktop, isMobile } = useMedia()

  return (
    <Box h="100vh" w="100%" overflowX="hidden">
      <VStack>
        <HomeButtons />

        <Box mt={isDesktop ? '-4rem' : ''}>
          <FullLogo />
        </Box>

        <Box mt="-8.75rem" w="full" mb={isMobile ? '6rem' : '0'}>
          <CloudsBg />
        </Box>

        <AquarioImg />
      </VStack>
      <BenefitsSlider />
    </Box>
  )
}
