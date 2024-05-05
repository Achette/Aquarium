import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  data: {
    id: number
    name: string
    img: string
    selected: boolean
    quantity?: number
  }[]
  path: string
}

export const ContinueButton = ({ data, path }: ButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(data)
    navigate(path)
  }
  return (
    <Button
      w="19.5rem"
      h="3rem"
      borderRadius="3.75rem"
      color="white.900"
      bgColor="blue.900"
      _hover={{ bgColor: 'blue.500' }}
      fontSize="1rem"
      onClick={() => handleClick()}
    >
      Avançar
    </Button>
  )
}
