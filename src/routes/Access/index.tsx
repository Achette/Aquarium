import { CloudsBg, VerticalLogo } from '@/components'
import { Box, VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export const Account = () => {
  return (
    <VStack mt="2rem">
      <CloudsBg />
      <Box mt="-4rem">
        <VerticalLogo />
      </Box>

      <Outlet />
    </VStack>
  )
}
