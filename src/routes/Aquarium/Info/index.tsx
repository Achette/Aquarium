import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export const AquariumInfo = () => {
  const { id } = useParams()

  return (
    <Box>
        {id}
        Essa é a tela de informações do aquário
    </Box>
  )
}
