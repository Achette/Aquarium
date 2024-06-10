import { Compute } from '@/utils'
import { Heading, Text } from '@chakra-ui/react'

type StatisticProps = {
  title: string
  dataGraph: number[]
}

export const StatisticDataCalcAndShow = ({
  title,
  dataGraph,
}: StatisticProps) => {
  const calculated = Compute(dataGraph)

  return (
    <>
      <Heading color="blue.900" fontSize="1rem">{title}</Heading>
      <Text fontSize="0.75rem">Média: <strong>{calculated?.Media}</strong></Text>
      <Text fontSize="0.75rem">Mediana: <strong>{calculated?.Mediana}</strong></Text>
      <Text fontSize="0.75rem">Moda: <strong>{calculated?.moda}</strong></Text>
      <Text fontSize="0.75rem">Desvio Padrão: <strong>{calculated?.DesvioPadrao}</strong></Text>
      <Text fontSize="0.75rem">Assimetria: <strong>{calculated?.Assimetria}</strong></Text>
      <Text fontSize="0.75rem">Variância: <strong>{calculated?.Variancia}</strong></Text>
      <Text fontSize="0.75rem">Curtose: <strong>{calculated?.Curtose}</strong></Text>
    </>
  )
}
