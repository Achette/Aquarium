import { useMedia } from '@/hooks'
import { Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const HomeButtons = () => {
  const navigate = useNavigate()
  const { isMobile, isMobileOrTablet } = useMedia()

  return (
    <Flex
      w={isMobile ? 'full' : '80%'}
      justifyContent={isMobileOrTablet ? 'space-around' : 'flex-end'}
      m="2rem 0"
      gap="2rem"
    >
      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.50"
        color="blue.900"
        fontWeight={400}
        onClick={() => navigate('/account/register')}
      >
        Cadastrar
      </Button>

      <Button
        h="3rem"
        w="8.75rem"
        bg="blue.900"
        color="white.400"
        fontWeight={400}
        _hover={{ bgColor: isMobileOrTablet ? 'transparent' : 'blue.500' }}
        onClick={() => navigate('/account')}
      >
        Entrar
      </Button>
    </Flex>
  )
}
