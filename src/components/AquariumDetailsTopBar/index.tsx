import { BuildSVG } from '@/utils'
import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { IoMdSettings } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import { Flex, Icon, Image, Text, Skeleton } from '@chakra-ui/react'
import { getAquariumDetails } from '@/redux/reducers/aquariumDetails'

export const AquariumDetailsTopBar = () => {
  const { isDesktop } = useMedia()
  const navigate = useNavigate()

  const { name, format_aquarium } = useSelector(getAquariumDetails)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Icon
        as={MdArrowBackIos}
        w={isDesktop ? '2rem' : '1.5rem'}
        h={isDesktop ? '2rem' : '1.5rem'}
        color="blue.900"
        onClick={() => navigate('/home')}
        cursor="pointer"
      />
      {name && format_aquarium ? (
        <Flex gap="1rem">
          <Image
            src={BuildSVG(format_aquarium)}
            w={isDesktop ? '3.75rem' : '2.5rem'}
          />
          <Text
            w={isDesktop ? '25rem' : '10rem'}
            fontSize={isDesktop ? '2.5rem' : '1.5rem'}
            fontWeight={800}
            color="blue.900"
          >
            {name}
          </Text>
        </Flex>
      ) : (
        <Skeleton h="3rem" w="full" />
      )}

      <Icon
        as={IoMdSettings}
        w={isDesktop ? '2rem' : '1.5rem'}
        h={isDesktop ? '2rem' : '1.5rem'}
        color="blue.900"
      />
    </Flex>
  )
}
