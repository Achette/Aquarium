import { GraphsProps } from '@/models'

export const ExtractDataToStatistic = (dataGraph: GraphsProps[]) => {
  const luminosidade = dataGraph
    .map((data) => parseFloat(data.luminosidade))
    .filter((value) => !isNaN(value))
  const saturacao = dataGraph
    .map((data) => parseFloat(data.saturacao))
    .filter((value) => !isNaN(value))
  const nivelAgua = dataGraph
    .map((data) => parseFloat(data.nivel_agua))
    .filter((value) => !isNaN(value))
  const pH = dataGraph
    .map((data) => parseFloat(data.ph))
    .filter((value) => !isNaN(value))
  const temperatura = dataGraph
    .map((data) => parseFloat(data.temperatura))
    .filter((value) => !isNaN(value))

  return {
    luminosidade,
    saturacao,
    nivelAgua,
    pH,
    temperatura,
  }
}
