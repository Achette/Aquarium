import { CloudsBg, VerticalLogo } from '@/components'
import {  VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export const Account = () => {
  return (
    <VStack mt="-2rem">
      <CloudsBg />
      <VerticalLogo />

   

      <Outlet />
    </VStack>
  )
}
