export const BuildMetricsValue = (name: string, value: string) => {
  switch (name) {
    case 'pH':
      return `${value}`

    case 'Nível de água':
      return `${value} cm`

    case 'Saturação':
      return `${value} ppm`

    case 'Luminosidade':
      return `${value} lm`

    case 'Temperatura':
      return `${value}ºC`
  }

  return ''
}
