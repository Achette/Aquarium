import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()
  
  return (
    <Button
      w="19.5rem"
      h="3rem"
      borderRadius="3.75rem"
      variant="outline"
      colorScheme="blue"
      fontSize="1rem"
      onClick={() => navigate(-1)}
    >
      Voltar
    </Button>
  )
}
