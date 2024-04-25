import { Avatar, HStack, Icon, Divider } from '@chakra-ui/react'
import { LogoSm } from '../LogoSm'
import { PiPowerFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <HStack justifyContent="space-around" mt="1.5rem">
      <LogoSm />

      <HStack
        h="auto"
        border="1px solid #D9D9E3"
        padding="2px 2px 2px 4px"
        borderRadius="6rem"
      >
        <Avatar
          name="Igor Achete"
          bgColor="blue.900"
          color="white.900"
          size="sm"
          cursor="pointer"
        />
        <Divider
          h="32px
        "
          orientation="vertical"
          color="blue.400"
        />
        <Icon
          as={PiPowerFill}
          w="32px"
          h="32px"
          color="blue.900"
          onClick={() => handleLogout()}
          cursor="pointer"
        />
      </HStack>
    </HStack>
  )
}
