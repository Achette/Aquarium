import { Link } from 'react-router-dom'
import { ButtonProps } from '../ContinueButton'
import { Button, Link as LinkChakra } from '@chakra-ui/react'

export const BackButton = ({ path }: ButtonProps) => {
  return (
    <LinkChakra as={Link} to={path}>
      <Button
        w="19.5rem"
        h="3rem"
        borderRadius="3.75rem"
        variant="outline"
        colorScheme="blue"
        fontSize="1rem"
      >
        Voltar
      </Button>
    </LinkChakra>
  )
}
