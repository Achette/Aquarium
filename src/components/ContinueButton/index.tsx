import { Link } from 'react-router-dom'
import { Button, Link as LinkChakra } from '@chakra-ui/react'

export type ButtonProps = {
  path: string
}
export const ContinueButton = ({ path }: ButtonProps) => {
  return (
    <LinkChakra as={Link} to={path}>
      <Button
        w="19.5rem"
        h="3rem"
        borderRadius="3.75rem"
        color="white.900"
        bgColor="blue.900"
        _hover={{ bgColor: 'blue.500' }}
        fontSize="1rem"
      >
        Avançar
      </Button>
    </LinkChakra>
  )
}
