import React from 'react'
import { LogoSm } from '../LogoSm'
import { useDispatch } from 'react-redux'
import { PiPowerFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { getUser, removeToken, removeUser } from '@/hooks'
import { resetAllAquarium } from '@/redux/reducers/aquariumSlice'
import { Avatar, HStack, Icon, Divider, Flex } from '@chakra-ui/react'

export const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState<string>()
  const dispatch = useDispatch()

  const handleLogout = React.useCallback(() => {
    removeToken()
    removeUser()
    dispatch(resetAllAquarium())
    navigate('/')
  }, [dispatch, navigate])

  React.useEffect(() => {
    setUser(getUser() || '')
  }, [])

  return (
    <HStack justifyContent="space-around" mt="1.5rem">
      <Flex w="calc(100% - 22%)" justifyContent="space-between">
        <LogoSm />

        <HStack
          h="auto"
          border="1px solid #D9D9E3"
          padding="2px 2px 2px 4px"
          borderRadius="6rem"
        >
          <Avatar
            name={user}
            bgColor="blue.900"
            color="white.900"
            size="sm"
            cursor="pointer"
          />
          <Divider h="32px" orientation="vertical" color="blue.400" />
          <Icon
            as={PiPowerFill}
            w="32px"
            h="32px"
            color="blue.900"
            onClick={handleLogout}
            cursor="pointer"
          />
        </HStack>
      </Flex>
    </HStack>
  )
}
