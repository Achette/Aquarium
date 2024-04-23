import {
  AquarioImg,
  BenefitsSlider,
  CloudsBg,
  FullLogo,
  HomeButtons,
} from '@/components'
import { Box, VStack } from '@chakra-ui/react'

export const Home = () => {
  return (
    <Box h="100vh" w="100%" overflowX="hidden">
      <VStack>
        <HomeButtons />

        <FullLogo />

        <Box mt="-1.5rem" w="full">
          <CloudsBg />
        </Box>

        <AquarioImg />
      </VStack>
      <BenefitsSlider />
    </Box>
  )
}
