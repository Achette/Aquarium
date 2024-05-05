import { useMedia } from '@/hooks'
import {
  Box,
  Flex,
  Icon,
  Link as LinkChakra,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { VscGraphLine } from 'react-icons/vsc'
import { HiOutlineHome } from 'react-icons/hi2'
import { BsSliders } from 'react-icons/bs'

export const AquariumDash = () => {
  const { isMobile, isMobileOrTablet } = useMedia()

  return (
    <Box w="full" h="100vh">
      <Outlet />
      <Flex
        w="full"
        h={isMobile ? '4.25rem' : '6.5rem'}
        borderTop="1px solid #0157A3"
        position="fixed"
        bottom="0"
        justifyContent="center"
        px={isMobileOrTablet ? '1rem' : '25%'}
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <LinkChakra as={Link} _hover={{ textDecoration: 'none' }}>
            <VStack>
              <Icon
                as={VscGraphLine}
                w={isMobile ? '2rem' : '2.5rem'}
                h={isMobile ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Dashboards
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra as={Link} _hover={{ textDecoration: 'none' }}>
            <VStack>
              <Icon
                as={HiOutlineHome}
                w={isMobile ? '2rem' : '2.5rem'}
                h={isMobile ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Início
              </Text>
            </VStack>
          </LinkChakra>

          <LinkChakra as={Link} _hover={{ textDecoration: 'none' }}>
            <VStack>
              <Icon
                as={BsSliders}
                w={isMobile ? '2rem' : '2.5rem'}
                h={isMobile ? '2rem' : '2.5rem'}
                color="blue.900"
              />
              <Text fontSize=".75rem" color="blue.900" fontWeight={300}>
                Controles
              </Text>
            </VStack>
          </LinkChakra>
        </Flex>
      </Flex>
    </Box>
  )
}
