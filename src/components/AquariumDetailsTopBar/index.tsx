import { useMedia } from '@/hooks'
import { BuildSVG } from '@/utils/buildSVG'
import { IoMdSettings } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'

type DetailsTopBarProps = {
  name: string | undefined
  format: string | undefined
}
export const AquariumDetailsTopBar = ({ name, format }: DetailsTopBarProps) => {
  const { isDesktop } = useMedia()
  const navigate = useNavigate()

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
      <Flex gap="1rem">
        <Image src={BuildSVG(format)} w={isDesktop ? '3.75rem' : '2.5rem'} />
        <Text
          w={isDesktop ? '25rem' : '15rem'}
          fontSize={isDesktop ? '2.5rem' : '1.5rem'}
          fontWeight={800}
          color="blue.900"
        >
          {name}
        </Text>
      </Flex>
      <Icon
        as={IoMdSettings}
        w={isDesktop ? '2rem' : '1.5rem'}
        h={isDesktop ? '2rem' : '1.5rem'}
        color="blue.900"
      />
    </Flex>
  )
}